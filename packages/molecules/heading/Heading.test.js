/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
// import { Basic } from "./Heading.stories";
import Heading from "./Heading.svelte";

// test("shows proper label", () => {
//   const results = render(Heading, { props: Basic.args });
//   expect(() => results.getByText("Hi I'm a Heading")).not.toThrow();
// });
test("Component renders", () => {
  const results = render(Heading);
  expect(() => results.toHaveClass("duk-heading"));
});
