/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";

import Footer from "./Footer.svelte";
// import { Basic } from "./Footer.stories";

// test("shows proper placeholder", () => {
//   const results = render(Footer, { props: Basic.args });
//   () => results.getAllByRole(Footer).toHaveClass();
// });
test("it renders", () => {
  const results = render(Footer);
  expect(() => results.toHaveClass("duk-footer"));
});
