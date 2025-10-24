// src/render/index.ts
import { render } from "@testing-library/react";
export * from "@testing-library/react";
import { default as default2 } from "@testing-library/user-event";
function renderWithProviders(ui, options) {
  return render(ui, { ...options });
}
export {
  renderWithProviders,
  default2 as userEvent
};
//# sourceMappingURL=index.mjs.map