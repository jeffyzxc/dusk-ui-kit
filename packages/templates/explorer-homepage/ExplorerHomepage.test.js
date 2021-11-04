/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import ExplorerHomepage from "./ExplorerHomepage.svelte";

test("Component renders", () => {
  const results = render(ExplorerHomepage, {});
  expect(() => results.toHaveClass("duk-explorer-homepage"));
});
