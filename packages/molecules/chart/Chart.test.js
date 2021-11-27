/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Chart from "./Chart.svelte";

test("Component renders", () => {
  const results = render(Chart, {});
  expect(() => results.toHaveClass("duk-chart"));
});
