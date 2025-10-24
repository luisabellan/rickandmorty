"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  mockCharacter: () => mockCharacter,
  renderWithProviders: () => renderWithProviders,
  setupTests: () => setupTests,
  userEvent: () => import_user_event.default
});
module.exports = __toCommonJS(src_exports);

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
  userEvent: () => import_user_event.default
});
var import_react = require("@testing-library/react");
__reExport(render_exports, require("@testing-library/react"));
var import_user_event = __toESM(require("@testing-library/user-event"));
function renderWithProviders(ui, options) {
  return (0, import_react.render)(ui, { ...options });
}

// src/index.ts
__reExport(src_exports, render_exports, module.exports);

// src/setup/index.ts
var import_jest_dom = require("@testing-library/jest-dom");
function setupTests() {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mockCharacter,
  renderWithProviders,
  setupTests,
  userEvent
});
//# sourceMappingURL=index.js.map