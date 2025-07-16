import React, { useState, useRef } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import { capitalizeFirstLetter } from "../../utils/formatters";

const VoiceInput = ({
  activeTab,
  onAddIncome,
  onAddCost,
  onAddGoal,
  selectedCurrency,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        await processAudio(audioBlob);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch {
      // Handle error silently
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream
        .getTracks()
        .forEach((track) => track.stop());
      setIsRecording(false);
    }
  };

  const getTabSpecificPrompt = () => {
    const currencyContext = `The user is using ${selectedCurrency} currency. Return amounts in the original currency mentioned - do not convert currencies.`;

    switch (activeTab) {
      case "income":
        return `${currencyContext} Extract income information from this voice recording. Return ONLY a JSON object with these exact fields: {"name": "income name", "amount": number, "period": "daily|weekly|monthly|yearly|one-off"}. Example: "salary 50000 monthly" should return {"name": "salary", "amount": 50000, "period": "monthly"}. If any field is unclear, use null for that field.`;
      case "expenses":
        return `${currencyContext} Extract expense information from this voice recording. Return ONLY a JSON object with these exact fields: {"name": "expense name", "amount": number, "period": "daily|weekly|monthly|yearly|one-off"}. Example: "rent 15000 monthly" should return {"name": "rent", "amount": 15000, "period": "monthly"}. If any field is unclear, use null for that field.`;
      case "goals":
        return `${currencyContext} Extract goal information from this voice recording. Return ONLY a JSON object with these exact fields: {"name": "goal name", "price": number, "dailyContribution": number}. Example: "new phone 25000 100 daily" should return {"name": "new phone", "price": 25000, "dailyContribution": 100}. If any field is unclear, use null for that field.`;
      default:
        return `Extract information from this voice recording and return it as a JSON object.`;
    }
  };

  const processAudio = async (audioBlob) => {
    setIsProcessing(true);
    try {
      // Convert audio blob to base64
      const arrayBuffer = await audioBlob.arrayBuffer();
      const base64Audio = btoa(
        String.fromCharCode(...new Uint8Array(arrayBuffer))
      );

      // Call the smart function
      const functions = getFunctions();
      const processSmartRequest = httpsCallable(
        functions,
        "processSmartRequest"
      );

      const result = await processSmartRequest({
        audioFile: base64Audio,
        prompt: getTabSpecificPrompt(),
        returnTranscript: false,
      });

      // Extract the response and try to parse as JSON
      const responseText = result.data.response;
      let extractedData = null;

      try {
        // Try to extract JSON from the response - handle multiline JSON
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          extractedData = JSON.parse(jsonMatch[0]);
        }
      } catch {
        // Handle JSON parse error silently
      }

      // If we have valid extracted data, process it directly
      if (extractedData) {
        try {
          if (activeTab === "incomes") {
            const { name, amount, period } = extractedData;
            if (name && amount && period) {
              const incomeData = {
                name: capitalizeFirstLetter(name.trim()),
                amount: parseFloat(amount),
                period: period,
                isExternal: true,
              };
              onAddIncome(incomeData);
            }
          } else if (activeTab === "expenses") {
            const { name, amount, period } = extractedData;
            if (name && amount && period) {
              const costData = {
                name: capitalizeFirstLetter(name.trim()),
                amount: parseFloat(amount),
                period: period,
              };
              onAddCost(costData);
            }
          } else if (activeTab === "goals") {
            const { name, price, dailyContribution } = extractedData;
            if (name && price && dailyContribution) {
              const goalData = {
                name: capitalizeFirstLetter(name.trim()),
                price: parseFloat(price),
                dailyContribution: parseFloat(dailyContribution),
              };
              onAddGoal(goalData);
            }
          }
        } catch {
          // Handle error silently
        }
      }
    } catch {
      // Handle error silently
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <button
      onClick={isRecording ? stopRecording : startRecording}
      disabled={isProcessing}
      className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 shadow-md ${
        isRecording
          ? "bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white"
          : isProcessing
          ? "bg-gray-400 cursor-not-allowed text-white"
          : "bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 text-white"
      }`}
      title={isRecording ? "Stop Recording" : "Start Voice Input"}
    >
      {isProcessing ? (
        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      )}
    </button>
  );
};

export default VoiceInput;
