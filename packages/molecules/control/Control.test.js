/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";

import Control from "./Control.svelte";
// import { Basic } from "./Control.stories";

// test("shows proper placeholder", () => {
//   const results = render(Control, { props: Basic.args });
//   expect(() => results.getByPlaceholderText("I'm Control")).not.toThrow();
// });

test("Component renders", () => {
  const results = render(Control);
  expect(() => results.toHaveClass("duk-control"));
});
