/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import ErrorBlock from "./ErrorBlock.svelte";

test("Component renders", () => {
  const results = render(ErrorBlock, {});
  expect(() => results.toHaveClass("duk-error-block"));
});
