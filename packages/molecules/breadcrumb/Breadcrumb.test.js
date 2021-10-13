/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
// import { Basic } from "./Breadcrumb.stories";
import Breadcrumb from "./Breadcrumb.svelte";

// test("shows proper label", () => {
//   const results = render(Breadcrumb, { props: Basic.args });
//   expect(() => results.getByText("Hi I'm a Breadcrumb")).not.toThrow();
// });
test("Component renders", () => {
  const results = render(Breadcrumb);
  expect(() => results.toHaveClass("duk-breadcrumb"));
});
