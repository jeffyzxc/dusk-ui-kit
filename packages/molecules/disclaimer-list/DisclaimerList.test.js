/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import DisclaimerList from "./DisclaimerList.svelte";

test("Component renders", () => {
  const results = render(DisclaimerList);
  expect(() => results.toHaveClass("duk-disclaimer-list"));
});
