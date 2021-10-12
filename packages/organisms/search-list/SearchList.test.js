/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import SearchList from "./SearchList.svelte";

test("Component renders", () => {
  const results = render(SearchList);
  expect(() => results.toHaveClass("duk-search-list"));
});
