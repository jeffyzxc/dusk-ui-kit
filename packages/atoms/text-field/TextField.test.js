import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import { Basic } from "./TextField.stories";
import TextField from "./storybook-views/Default.svelte";

test("shows proper label", () => {
  const results = render(TextField, { props: Basic.args });
  expect(() => results.getByPlaceholderText("This is text field")).not.toThrow();
});
