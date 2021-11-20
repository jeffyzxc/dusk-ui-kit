/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Default from "./Default.svelte";

test("Component renders", () => {
  const results = render(Default, {});
  expect(() => results.toHaveClass("duk-default"));
});
