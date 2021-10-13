/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
// import { Basic } from "./Hero.stories";
import Hero from "./Hero.svelte";

// test("shows proper label", () => {
//   const results = render(Hero, { props: Basic.args });
//   expect(() => results.getByText("Hi I'm a Hero")).not.toThrow();
// });
test("Component renders", () => {
  const results = render(Hero);
  expect(() => results.toHaveClass("duk-hero"));
});
