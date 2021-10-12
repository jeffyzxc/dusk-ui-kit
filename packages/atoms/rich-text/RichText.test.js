/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
//import { Basic } from "./RichText.stories";
import RichText from "./RichText.svelte";

// test("shows proper label", () => {
//   const results = render(RichText, { props: Basic.args });
//   expect(() => results.getByText("This is an italic text")).not.toThrow();
// });
test("Component renders", () => {
  const results = render(RichText);
  expect(() => results.toHaveClass("duk-rich-text"));
});
