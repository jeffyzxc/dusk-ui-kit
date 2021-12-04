/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import ExtensionDefault from "./ExtensionDefault.svelte";

test("Component renders", () => {
  const results = render(ExtensionDefault, {});
  expect(() => results.toHaveClass("duk-extension-default"));
});
