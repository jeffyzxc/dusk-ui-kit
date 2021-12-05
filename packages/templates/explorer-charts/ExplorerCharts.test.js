/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import ExplorerCharts from "./ExplorerCharts.svelte";

test("Component renders", () => {
  const results = render(ExplorerCharts, {});
  expect(() => results.toHaveClass("duk-explorer-charts"));
});
