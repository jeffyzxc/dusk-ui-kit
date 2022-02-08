/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Slider from "./Slider.svelte";

test("Component renders", () => {
  const results = render(Slider, {});
  expect(() => results.toHaveClass("duk-slider"));
});
