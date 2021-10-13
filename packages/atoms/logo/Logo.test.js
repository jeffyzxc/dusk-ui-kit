/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";

import Logo from "./Logo.svelte";
//import { Basic } from "./Logo.stories";

// test("shows proper placeholder", () => {
//   const results = render(Logo, { props: Basic.args });
//   () => results.getByRole(Logo).toHaveClass;
// });
test("Component renders", () => {
  const results = render(Logo);
  expect(() => results.toHaveClass("duk-logo"));
});
