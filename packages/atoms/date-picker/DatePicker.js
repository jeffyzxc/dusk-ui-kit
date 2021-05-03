import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import { Basic } from "./DatePicker.stories";
import * as DatePicker from "./storybook-views/Default.svelte";

test("shows proper label", () => {
  const results = render(DatePicker, { props: Basic.args });
  expect(() => results.getByPlaceholderText("Choose a date")).not.toThrow();
});
