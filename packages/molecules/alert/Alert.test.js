/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
//import { Basic } from "./Alert.stories";
import Alert from "./Alert.svelte";

// test("shows proper label", () => {
//   const results = render(Alert, { props: Basic.args });
//   expect(() => results.getByText("This is an alert!")).not.toThrow();
// });

test("it renders", () => {
  const results = render(Alert, {
    prosp: { value: true },
  });
  expect(() => results.toHaveClass("duk-alert"));
});
