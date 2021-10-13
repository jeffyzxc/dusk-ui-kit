/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
// import { Basic } from "./Button.stories";
import ProgressBar from "./ProgressBar.svelte";

// test("shows proper label", () => {
//   const results = render(ProgressBar, { props: Basic.args });
//   // expect(() => results.getByText("Hi I'm a Button")).not.toThrow();
// });
test("Component renders", () => {
  const results = render(ProgressBar, {
    props: { steps: 3, step: 1 },
  });
  expect(() => results.toHaveClass("duk-progress-bar"));
});
