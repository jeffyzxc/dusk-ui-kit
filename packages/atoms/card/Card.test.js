import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import { Basic } from "./Card.stories";
import Card from "./storybook-views/Default.svelte";

test("shows proper label", () => {
  const results = render(Card, { props: Basic.args });
  expect(() =>
    results.getByText(
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam minus quod neque eligendi eaque aliquam fugit nemo cupiditate odio sapiente?",
    ),
  ).not.toThrow();
});
