var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// src/index.ts
var src_exports = {};
__export(src_exports, {
  mockCharacter: () => mockCharacter,
  renderWithProviders: () => renderWithProviders,
  setupTests: () => setupTests,
  userEvent: () => default2
});

// src/mocks/index.ts
var mockCharacter = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1"
  },
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/1"],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z"
};

// src/render/index.ts
var render_exports = {};
__export(render_exports, {
  renderWithProviders: () => renderWithProviders,
  userEvent: () => default2
});
__reExport(render_exports, react_star);
import { render } from "@testing-library/react";
import * as react_star from "@testing-library/react";
import { default as default2 } from "@testing-library/user-event";
function renderWithProviders(ui, options) {
  return render(ui, { ...options });
}

// src/index.ts
__reExport(src_exports, render_exports);

// src/setup/index.ts
import "@testing-library/jest-dom";
function setupTests() {
}
export {
  mockCharacter,
  renderWithProviders,
  setupTests,
  default2 as userEvent
};
//# sourceMappingURL=index.mjs.map