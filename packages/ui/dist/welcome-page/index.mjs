"use client";
import { DONATION_CONFIG } from '@rickandmorty/config/donation';
import { jsxs, jsx } from 'react/jsx-runtime';

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
function WelcomePage() {
  return /* @__PURE__ */ jsxs("div", { className: "welcome-page max-w-4xl mx-auto p-6", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-center mb-4", children: "Welcome to the Ultimate Rick & Morty Fan Site" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-center mb-6", children: "Explore characters, episodes, and dive deep into the multiverse." }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsx("a", { href: "/characters", className: "bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded", children: "Browse Characters" }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 p-4 bg-gray-100 rounded-lg text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-2", children: "Support This Fan Project" }),
      /* @__PURE__ */ jsx("p", { className: "mb-4", children: "This site is maintained to remain compatible with Spanish unemployment benefits regulations. Donations help cover hosting and domain expenses only." }),
      /* @__PURE__ */ jsx(KofiButton, {})
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 text-sm text-center text-gray-600", children: [
      /* @__PURE__ */ jsxs("p", { className: "mb-2", children: [
        /* @__PURE__ */ jsx("strong", { children: "Disclaimer:" }),
        " This site is an unofficial fan site and is not endorsed by, sponsored by, or affiliated with Adult Swim, Williams Street, or any other copyright holders of Rick and Morty."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "All character names, images, and related materials are the property of their respective copyright holders." })
    ] })
  ] });
}

export { WelcomePage };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map