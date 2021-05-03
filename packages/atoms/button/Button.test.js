import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import { Basic } from "./Button.stories";
import Button from "./storybook-views/Default.svelte";

test("shows proper label", () => {
  const results = render(Button, { props: Basic.args });
  expect(() => results.getByText("Hi I'm a Button")).not.toThrow();
});
