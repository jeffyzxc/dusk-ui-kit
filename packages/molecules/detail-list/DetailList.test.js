/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import DetailList from "./DetailList.svelte";

test("Component renders", () => {
  const results = render(DetailList, {});
  expect(() => results.toHaveClass("duk-detail-list"));
});
