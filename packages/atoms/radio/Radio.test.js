import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import { Basic } from "./Radio.stories";
import Radio from "./storybook-views/Default.svelte";

test("shows proper label", () => {
  const results = render(Radio, { props: Basic.args });
  expect(() => results.getByText("Yo! I am a Radio")).not.toThrow();
});
