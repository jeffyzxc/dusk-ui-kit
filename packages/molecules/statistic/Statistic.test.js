/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Statistic from "./Statistic.svelte";

test("Component renders", () => {
  const results = render(Statistic, {});
  expect(() => results.toHaveClass("duk-statistic"));
});
