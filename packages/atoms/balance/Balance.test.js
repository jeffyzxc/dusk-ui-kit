/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Balance from "./Balance.svelte";

test("Component renders", () => {
  const results = render(Balance, {});
  expect(() => results.toHaveClass("duk-balance"));
});
