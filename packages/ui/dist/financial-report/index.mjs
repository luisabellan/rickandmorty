"use client";
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs } from 'react/jsx-runtime';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var Card = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
);
Card.displayName = "Card";
var CardHeader = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
);
CardHeader.displayName = "CardHeader";
var CardTitle = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "h3",
  {
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
);
CardTitle.displayName = "CardTitle";
var CardDescription = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "p",
  {
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
);
CardDescription.displayName = "CardDescription";
var CardContent = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("p-6 pt-0", className), ...props });
CardContent.displayName = "CardContent";
var FinancialReportContent = () => {
  const reportData = {
    period: "January 2025",
    totalDonations: 85.5,
    hostingCosts: 5,
    domainCosts: 1.25,
    // Pro-rated monthly cost
    sslCosts: 0,
    otherCosts: 2.5,
    // Other operational costs
    remainingFunds: 76.75,
    totalExpenses: 8.75
  };
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto py-8 px-4", children: /* @__PURE__ */ jsxs(Card, { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: "Financial Transparency Report" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Transparent reporting of donations and expenses for the Rick and Morty Fan Site" })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Purpose of Financial Transparency" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "As required for compatibility with Spanish unemployment benefits (prestaci\xF3n contributiva de desempleo), we maintain complete financial transparency. This report shows how donations are used exclusively for hosting and domain expenses, with no personal profit made from this project." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold mb-4", children: [
          "Financial Summary - ",
          reportData.period
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded-md", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-green-800", children: "Total Donations Received" }),
            /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold text-green-700", children: [
              "\u20AC",
              reportData.totalDonations.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-4 rounded-md", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-800", children: "Total Expenses" }),
            /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold text-red-700", children: [
              "\u20AC",
              reportData.totalExpenses.toFixed(2)
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Expense Breakdown" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b pb-2", children: [
            /* @__PURE__ */ jsx("span", { children: "Hosting Costs" }),
            /* @__PURE__ */ jsxs("span", { children: [
              "\u20AC",
              reportData.hostingCosts.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b pb-2", children: [
            /* @__PURE__ */ jsx("span", { children: "Domain Registration (monthly)" }),
            /* @__PURE__ */ jsxs("span", { children: [
              "\u20AC",
              reportData.domainCosts.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b pb-2", children: [
            /* @__PURE__ */ jsx("span", { children: "SSL Certificates" }),
            /* @__PURE__ */ jsxs("span", { children: [
              "\u20AC",
              reportData.sslCosts.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b pb-2", children: [
            /* @__PURE__ */ jsx("span", { children: "Other Operational Costs" }),
            /* @__PURE__ */ jsxs("span", { children: [
              "\u20AC",
              reportData.otherCosts.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between font-semibold text-lg pt-2", children: [
            /* @__PURE__ */ jsx("span", { children: "Total Expenses" }),
            /* @__PURE__ */ jsxs("span", { children: [
              "\u20AC",
              reportData.totalExpenses.toFixed(2)
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Funds Status" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-md", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800", children: "Remaining Funds for Future Expenses" }),
          /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold text-blue-700", children: [
            "\u20AC",
            reportData.remainingFunds.toFixed(2)
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm", children: "Remaining funds are reserved for future hosting expenses or will be donated to charity if no longer needed." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Compliance Statement" }),
        /* @__PURE__ */ jsx("p", { className: "mb-2", children: "This project operates without profit motive (no \xE1nimo de lucro) and takes measures to prevent habitual income patterns (habitualidad de ingresos), as required for compatibility with Spanish unemployment benefits regulations." }),
        /* @__PURE__ */ jsx("p", { children: "All financial data is available for verification to ensure continued compliance with unemployment benefit requirements." })
      ] })
    ] }) })
  ] }) });
};

export { FinancialReportContent };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map