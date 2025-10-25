"use client";
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

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

// ../config/src/donation.ts
var DONATION_CONFIG = {
  kofi: {
    username: process.env.NEXT_PUBLIC_KOFI_USERNAME || "your-kofi-username",
    enabled: process.env.NEXT_PUBLIC_KOFI_ENABLED === "true" || false
    // Default to false for compliance
  }
  // Other donation settings can be added here
};
var KofiButton = ({
  text = "Support on Ko-fi",
  color = "#29abe0",
  hideDonateText = false
}) => {
  if (!DONATION_CONFIG.kofi.enabled) {
    return /* @__PURE__ */ jsx("div", { className: "text-center py-4", children: /* @__PURE__ */ jsx("p", { className: "text-gray-600 italic", children: "Donations are currently disabled to maintain compliance with unemployment benefit regulations." }) });
  }
  return /* @__PURE__ */ jsx("div", { className: "kofi-button-container", children: /* @__PURE__ */ jsx(
    "a",
    {
      href: `https://ko-fi.com/${DONATION_CONFIG.kofi.username}`,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "inline-block",
      children: /* @__PURE__ */ jsx(
        "img",
        {
          height: "36",
          style: { border: "0px", height: "36px" },
          src: "https://storage.ko-fi.com/cdn/kofi3.png?v=3",
          alt: text,
          title: text
        }
      )
    }
  ) });
};
var DonationPageContent = () => {
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto py-8 px-4", children: /* @__PURE__ */ jsxs(Card, { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: "Support Our Hosting Costs" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Help keep the Rick and Morty Fan Site running" })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsx(DonationCounter, { targetAmount: 75, currentAmount: 15 }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: "About Our Donation System" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "This is a non-profit fan site created to celebrate the Rick and Morty universe. All donations received go directly toward covering hosting and domain expenses to keep this resource available to the community." }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "This project is maintained to remain compatible with Spanish unemployment benefits (prestaci\xF3n contributiva de desempleo) regulations. We do not profit from this site." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: "Current Expenses" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 mb-4", children: [
          /* @__PURE__ */ jsx("li", { children: "Monthly hosting costs: \u20AC5" }),
          /* @__PURE__ */ jsx("li", { children: "Domain registration: \u20AC15/year" }),
          /* @__PURE__ */ jsx("li", { children: "SSL certificates: \u20AC0 (using free certificates)" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("strong", { children: "Total monthly cost: \u20AC6.25" }),
          " (\u20AC5 hosting + \u20AC1.25 for domain/year)"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: "Donate to Cover Expenses" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Your donation helps keep this fan site running. All funds go directly toward hosting and domain expenses." }),
        /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx(KofiButton, {}) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4", children: "(Note: During the aut\xF3nomo period, donations are temporarily accepted. After the aut\xF3nomo period ends, this functionality may be disabled to maintain compliance with unemployment benefit regulations.)" })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: "Financial Transparency" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "As required for compatibility with Spanish unemployment benefits, we maintain complete financial transparency. All donations are used exclusively for hosting and domain expenses. No personal profit is made from this project." }),
        /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2", children: "Anti-Habitual Income Measures" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 mb-4 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: "No recurring subscriptions or automatic payments" }),
          /* @__PURE__ */ jsx("li", { children: "Donations are completely voluntary with no schedule" }),
          /* @__PURE__ */ jsx("li", { children: "Donation limits: maximum \u20AC50/month per person" }),
          /* @__PURE__ */ jsx("li", { children: "No premium features or benefits based on donations" }),
          /* @__PURE__ */ jsx("li", { children: "All content remains free and accessible regardless of donation status" })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2", children: "No Profit Motive (No \xC1nimo de Lucro)" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 mb-4 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: "All donations fund only operational expenses" }),
          /* @__PURE__ */ jsx("li", { children: "The site operates exclusively as a fan resource" }),
          /* @__PURE__ */ jsx("li", { children: "No commercial services or products are offered" }),
          /* @__PURE__ */ jsx("li", { children: "The project remains open source and community-focused" }),
          /* @__PURE__ */ jsx("li", { children: "No personal profit is generated by site operators" })
        ] })
      ] })
    ] }) })
  ] }) });
};

export { DonationPageContent };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map