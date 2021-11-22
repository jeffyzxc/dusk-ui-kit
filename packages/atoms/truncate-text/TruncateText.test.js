/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import TruncateText from "./TruncateText.svelte";

test("Component renders", () => {
  const results = render(TruncateText, {});
  expect(() => results.toHaveClass("duk-truncate-text"));
});
