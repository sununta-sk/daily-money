export const incomePrompt = () =>
  `Your goal is to fill in these fields based on the audio. Return ONLY a JSON object with these fields: {"name": string, "amount": number, "period": "daily|weekly|monthly|yearly|one-off", "source": "internal|external"}.
If no period is detected, set it to "one-off".`;

export const expensesPrompt = () =>
  `Extract expense information from this voice recording. Return ONLY a JSON object with these fields: {"name": string, "amount": number, "period": "daily|weekly|monthly|yearly|one-off"}. If any field is unclear, use null for that field.`;

export const goalsPrompt = () =>
  `Extract goal information from this voice recording. Return ONLY a JSON object with these fields: {"name": string, "price": number, "dailyContribution": number}. If any field is unclear, use null for that field.`;
