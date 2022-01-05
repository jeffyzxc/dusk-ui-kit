/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Content from "./Content.svelte";

test("Component renders", () => {
  const results = render(Content, {});
  expect(() => results.toHaveClass("duk-content"));
});
