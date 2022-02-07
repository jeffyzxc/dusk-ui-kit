/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import BuyHomepage from "./BuyHomepage.svelte";

test("Component renders", () => {
  const results = render(BuyHomepage, {});
  expect(() => results.toHaveClass("duk-buy-homepage"));
});
