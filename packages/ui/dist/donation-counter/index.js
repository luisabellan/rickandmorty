'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
export const DonationCounter = ({ targetAmount = 75, // €6.25/month * 12 months = €75/year
currentAmount = 0 }) => {
    const [amount, setAmount] = useState(currentAmount);
    const percentage = Math.min(100, (amount / targetAmount) * 100);
    // Simulate receiving donations (in a real app, this would come from an API)
    useEffect(() => {
        // This would be replaced with real API calls in production
        const interval = setInterval(() => {
            // Random small donation to simulate activity (0 to 0.50€)
            const randomDonation = Math.random() * 0.5;
            setAmount(prev => Math.min(targetAmount, prev + randomDonation));
        }, 30000); // Every 30 seconds
        return () => clearInterval(interval);
    }, [targetAmount]);
    return (_jsxs("div", { className: "w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md", children: [_jsx("h3", { className: "text-lg font-semibold mb-4 text-center", children: "Annual Hosting & Domain Fund" }), _jsxs("div", { className: "mb-2 flex justify-between", children: [_jsxs("span", { className: "text-sm font-medium", children: ["Progress: \u20AC", amount.toFixed(2), " / \u20AC", targetAmount.toFixed(2)] }), _jsxs("span", { className: "text-sm font-medium", children: [percentage.toFixed(0), "%"] })] }), _jsx("div", { className: "w-full bg-gray-200 rounded-full h-4 mb-4", children: _jsx("div", { className: "bg-green-500 h-4 rounded-full transition-all duration-500 ease-in-out", style: { width: `${percentage}%` } }) }), _jsxs("div", { className: "text-sm text-gray-600 mb-4", children: [_jsxs("p", { children: [_jsx("strong", { children: "Monthly hosting:" }), " \u20AC5.00"] }), _jsxs("p", { children: [_jsx("strong", { children: "Annual domain:" }), " \u20AC15.00"] }), _jsxs("p", { children: [_jsx("strong", { children: "Total annual cost:" }), " \u20AC75.00"] })] }), _jsxs("div", { className: "text-xs text-gray-500", children: [_jsx("p", { children: "All donations go directly toward hosting and domain expenses." }), _jsx("p", { children: "This project operates without profit to maintain compliance with Spanish unemployment benefits regulations." })] })] }));
};
//# sourceMappingURL=index.js.map