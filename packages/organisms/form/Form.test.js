/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";

import Form from "./Form.svelte";
// import { Basic } from "./Form.stories";

// test("shows proper placeholder", () => {
//   const results = render(Form, { props: Basic.args });
//   () => results.getAllByRole(Form).toHaveClass;
// });
test("it renders", () => {
  const results = render(Form);
  expect(() => results.toHaveClass("duk-form"));
});
