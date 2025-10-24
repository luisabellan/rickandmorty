'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
export function Navigation() {
    return (_jsx("nav", { className: "navigation bg-gray-100 p-4", children: _jsxs("div", { className: "container mx-auto flex flex-wrap items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-8", children: [_jsx(Link, { href: "/", className: "text-blue-600 hover:text-blue-800 font-medium", children: "Home" }), _jsx(Link, { href: "/characters", className: "text-blue-600 hover:text-blue-800 font-medium", children: "Characters" })] }), _jsxs("div", { className: "flex items-center space-x-6 mt-2 sm:mt-0", children: [_jsx(Link, { href: "/donations", className: "text-green-600 hover:text-green-800 font-medium", children: "Support Hosting" }), _jsx(Link, { href: "/financial-report", className: "text-purple-600 hover:text-purple-800 font-medium", children: "Financial Report" })] })] }) }));
}
//# sourceMappingURL=index.js.map