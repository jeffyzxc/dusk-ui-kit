/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import DateText from "./DateText.svelte";

test("Component renders", () => {
  const results = render(DateText, {});
  expect(() => results.toHaveClass("duk-date-text"));
});
