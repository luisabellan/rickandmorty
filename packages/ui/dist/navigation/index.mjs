"use client";
import Link from 'next/link';
import { jsx, jsxs } from 'react/jsx-runtime';

function Navigation() {
  return /* @__PURE__ */ jsx("nav", { className: "navigation bg-gray-100 p-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex flex-wrap items-center justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-8", children: [
      /* @__PURE__ */ jsx(Link, { href: "/", className: "text-blue-600 hover:text-blue-800 font-medium", children: "Home" }),
      /* @__PURE__ */ jsx(Link, { href: "/characters", className: "text-blue-600 hover:text-blue-800 font-medium", children: "Characters" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-6 mt-2 sm:mt-0", children: [
      /* @__PURE__ */ jsx(Link, { href: "/donations", className: "text-green-600 hover:text-green-800 font-medium", children: "Support Hosting" }),
      /* @__PURE__ */ jsx(Link, { href: "/financial-report", className: "text-purple-600 hover:text-purple-800 font-medium", children: "Financial Report" })
    ] })
  ] }) });
}

export { Navigation };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map