/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
// import { Basic } from "./TextField.stories";
import TextField from "./TextField.svelte";

// test("shows proper label", () => {
//   const results = render(TextField, { props: Basic.args });
//   expect(() => results.getByPlaceholderText("This is text field")).not.toThrow();
// });

test("Component renders", () => {
  const results = render(TextField);
  expect(() => results.toHaveClass("duk-text-field"));
});
