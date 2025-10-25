"use client";
import { jsx } from 'react/jsx-runtime';

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

export { KofiButton };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map