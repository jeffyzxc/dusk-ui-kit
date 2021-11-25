/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import DevopsDashboard from "./DevopsDashboard.svelte";

test("Component renders", () => {
  const results = render(DevopsDashboard, {});
  expect(() => results.toHaveClass("duk-devops-dashboard"));
});
