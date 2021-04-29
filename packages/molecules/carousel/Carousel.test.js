import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import { Basic } from "./Carousel.stories";
import Carousel from "./storybook-views/Default.svelte";

test("shows proper img", () => {
  const results = render(Carousel, { props: Basic.args });
  expect(() => results.getByAlltText("Kitten 1")).not.toThrow();
});
