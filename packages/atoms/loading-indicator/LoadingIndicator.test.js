/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";

//import { Basic } from "./LoadingIndicator.stories";
import LoadingIndicator from "./LoadingIndicator.svelte";

// test("shows proper label", () => {
//   const results = render(LoadingIndicator, { props: Basic.args });
//   () => results.getByRole(LoadingIndicator).toHaveClass;
// });
test("it renders", () => {
  const results = render(LoadingIndicator);
  expect(() => results.toHaveClass("duk-loading-indicator"));
});
