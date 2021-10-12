/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import CtaList from "./CtaList.svelte";

test("Component renders", () => {
  const results = render(CtaList);
  expect(() => results.toHaveClass("duk-cta-list"));
});
