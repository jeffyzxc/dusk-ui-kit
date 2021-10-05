/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
// import { Basic } from "./Card.stories";
import Card from "./Card.svelte";

// test("shows proper label", () => {
//   const results = render(Card, { props: Basic.args });
//   expect(() =>
//     results.getByText(
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam minus quod neque eligendi eaque aliquam fugit nemo cupiditate odio sapiente?",
//     ),
//   ).not.toThrow();
// });

test("it renders", () => {
  const results = render(Card);
  expect(() => results.toHaveClass("duk-card"));
});
