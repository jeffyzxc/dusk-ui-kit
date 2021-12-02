/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import DevopsCentered from "./DevopsCentered.svelte";

test("Component renders", () => {
  const results = render(DevopsCentered, {});
  expect(() => results.toHaveClass("duk-devops-centered"));
});
