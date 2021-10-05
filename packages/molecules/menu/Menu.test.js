/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";

import Menu from "./Menu.svelte";
//import { Basic } from "./Menu.stories";

// test("shows proper item value", () => {
//   const results = render(Menu, { props: Basic.args });
//   expect(() => results.getByText("Navigation item 1")).not.toThrow();
// });

test("it renders", () => {
  const results = render(Menu);
  expect(() => results.toHaveClass("duk-menu"));
});
