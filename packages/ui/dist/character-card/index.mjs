"use client";
import { jsxs, jsx } from 'react/jsx-runtime';

function CharacterCard({ character }) {
  const statusColor = {
    "Alive": "text-green-400",
    "Dead": "text-red-400",
    "unknown": "text-gray-400"
  }[character.status] || "text-gray-400";
  return /* @__PURE__ */ jsxs("div", { className: "bg-gray-800 bg-opacity-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative h-64 w-full", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: character.image,
          alt: character.name,
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: `absolute top-3 right-3 px-3 py-1 rounded-full ${statusColor} bg-black bg-opacity-70 font-semibold text-sm`, children: character.status })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 space-y-2", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3 truncate", children: character.name }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1 text-sm", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-gray-300", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Species:" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: character.species })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-300", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Gender:" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: character.gender })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-300", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Location:" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-white font-medium truncate", children: character.location?.name || "Unknown" })
        ] }),
        character.type && character.type.trim() !== "" && /* @__PURE__ */ jsxs("p", { className: "text-gray-300", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Type:" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: character.type })
        ] })
      ] })
    ] })
  ] });
}

export { CharacterCard };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map