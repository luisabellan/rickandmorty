"use client";
import { useState, useEffect } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

var DonationCounter = ({
  targetAmount = 75,
  // €6.25/month * 12 months = €75/year
  currentAmount = 0
}) => {
  const [amount, setAmount] = useState(currentAmount);
  const percentage = Math.min(100, amount / targetAmount * 100);
  useEffect(() => {
    const interval = setInterval(() => {
      const randomDonation = Math.random() * 0.5;
      setAmount((prev) => Math.min(targetAmount, prev + randomDonation));
    }, 3e4);
    return () => clearInterval(interval);
  }, [targetAmount]);
  return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4 text-center", children: "Annual Hosting & Domain Fund" }),
    /* @__PURE__ */ jsxs("div", { className: "mb-2 flex justify-between", children: [
      /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
        "Progress: \u20AC",
        amount.toFixed(2),
        " / \u20AC",
        targetAmount.toFixed(2)
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
        percentage.toFixed(0),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-4 mb-4", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "bg-green-500 h-4 rounded-full transition-all duration-500 ease-in-out",
        style: { width: `${percentage}%` }
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600 mb-4", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Monthly hosting:" }),
        " \u20AC5.00"
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Annual domain:" }),
        " \u20AC15.00"
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Total annual cost:" }),
        " \u20AC75.00"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-500", children: [
      /* @__PURE__ */ jsx("p", { children: "All donations go directly toward hosting and domain expenses." }),
      /* @__PURE__ */ jsx("p", { children: "This project operates without profit to maintain compliance with Spanish unemployment benefits regulations." })
    ] })
  ] });
};

export { DonationCounter };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map