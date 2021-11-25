/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Address from "./Address.svelte";

test("Component renders", () => {
  const results = render(Address, {});
  expect(() => results.toHaveClass("duk-address"));
});
