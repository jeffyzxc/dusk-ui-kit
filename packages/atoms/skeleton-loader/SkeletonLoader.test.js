/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import SkeletonLoader from "./SkeletonLoader.svelte";

test("Component renders", () => {
  const results = render(SkeletonLoader, {});
  expect(() => results.toHaveClass("duk-skeleton-loader"));
});
