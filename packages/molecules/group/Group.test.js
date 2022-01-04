/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Group from "./Group.svelte";

test("Component renders", () => {
  const results = render(Group, {});
  expect(() => results.toHaveClass("duk-group"));
});
