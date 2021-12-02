/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Chip from "./Chip.svelte";

test("Component renders", () => {
  const results = render(Chip, {});
  expect(() => results.toHaveClass("duk-chip"));
});
