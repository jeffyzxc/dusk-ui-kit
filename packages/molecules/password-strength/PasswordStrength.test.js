/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
// import { Basic } from "./PasswordStrength.stories";
import PasswordStrength from "./PasswordStrength.svelte";

// test("shows proper label", () => {
//   const results = render(PasswordStrength, { props: Basic.args });
//   expect(() => results.getByText("Hi I'm a PasswordStrength")).not.toThrow();
// });

test("Component renders", () => {
  const results = render(PasswordStrength);
  expect(() => results.toHaveClass("duk-password-strength"));
});
