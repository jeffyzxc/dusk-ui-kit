/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import ExplorerDetail from "./ExplorerDetail.svelte";

test("Component renders", () => {
  const results = render(ExplorerDetail, {});
  expect(() => results.toHaveClass("duk-explorer-detail"));
});
