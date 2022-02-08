/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import StepList from "./StepList.svelte";

test("Component renders", () => {
  const results = render(StepList, {});
  expect(() => results.toHaveClass("duk-step-list"));
});
