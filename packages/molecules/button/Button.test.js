/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
// import { Basic } from "./Button.stories";
import Button from "./Button.svelte";

// test("shows proper label", () => {
//   const results = render(Button, { props: Basic.args });
//   expect(() => results.getByText("Hi I'm a Button")).not.toThrow();
// });

test("Component renders", () => {
  const results = render(Button);
  expect(() => results.toHaveClass("duk-button"));
});
