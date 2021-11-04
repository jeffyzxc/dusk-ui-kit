/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import ExplorerList from "./ExplorerList.svelte";

test("Component renders", () => {
  const results = render(ExplorerList, {});
  expect(() => results.toHaveClass("duk-explorer-list"));
});
