import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import { Basic } from "./Checkbox.stories";
import Checkbox from "./storybook-views/Default.svelte";

test("shows proper label", () => {
  const results = render(Checkbox, { props: Basic.args });
  expect(() => results.getByText("Yo! I am a Checkbox")).not.toThrow();
});
