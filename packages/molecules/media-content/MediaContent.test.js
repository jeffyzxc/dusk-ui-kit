/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import MediaContent from "./MediaContent.svelte";

test("Component renders", () => {
  const results = render(MediaContent, {});
  expect(() => results.toHaveClass("duk-media-content"));
});
