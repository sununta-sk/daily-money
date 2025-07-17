import React, { useState, useRef } from "react";
import { CURRENCIES } from "../../utils/currency";
import WhaleLogo from "../WhaleLogo";
import { useAuth, useClickOutside } from "../../hooks";
import { saveActiveTab, saveCurrency, saveSpendLimit, saveMoneyInBank, getSpendLimit, getMoneyInBank } from "../../utils/database";

const Navbar = ({ tabs, setActiveTab, uid, setCurrency, currency }) => {
  const [spendLimit, setSpendLimit] = useState("");
  const [moneyInBank, setMoneyInBank] = useState("");

  React.useEffect(() => {
    if (!uid) return;
    (async () => {
      const [spend, bank] = await Promise.all([
        getSpendLimit(uid),
        getMoneyInBank(uid),
      ]);
      if (spend !== undefined) setSpendLimit(spend);
      if (bank !== undefined) setMoneyInBank(bank);
    })();
  }, []);

  return (
    <nav className="p-3 border rounded-2xl bg-white/70 backdrop-blur-md shadow-md flex items-center justify-between">
      {/* Left Section: Logo and Navigation */}
      <div className="flex items-center">
        {/* App Logo */}
        <WhaleLogo className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full shadow" />

        {/* Mobile Navigation: Dropdown select */}
        <div className=" ml-2">

          {tabs.map((tab) => (
            <button key={tab}
            onClick={() => {
              if (uid) saveActiveTab(uid, tab);
              setActiveTab(tab);
            }}>
              {tab}
            </button>
          ))}

        </div>
      </div>
      <div className="flex items-center ml-auto gap-2">
        <input
          type="number"
          className="p-2 border rounded"
          placeholder="Spend Limit"
          value={spendLimit}
          onChange={e => {
            setSpendLimit(e.target.value);
            if (uid) saveSpendLimit(uid, e.target.value);
          }}
        />
        <input
          type="number"
          className="p-2 border rounded"
          placeholder="Money in Bank"
          value={moneyInBank}
          onChange={e => {
            setMoneyInBank(e.target.value);
            if (uid) saveMoneyInBank(uid, e.target.value);
          }}
        />
        <select
          className="ml-4 p-2 border rounded"
          value={currency}
          onChange={e => {
            if (uid) saveCurrency(uid, e.target.value);
            setCurrency && setCurrency(e.target.value);
          }}
        >
          <option value="USD">USD</option>
          <option value="THAIBAHT">THAIBAHT</option>
          <option value="DIRHAM">DIRHAM</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
