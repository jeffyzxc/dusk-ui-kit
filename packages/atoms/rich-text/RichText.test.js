import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import { Basic } from "./RichText.stories";
import RichText from "./storybook-views/Default.svelte";

test("shows proper label", () => {
  const results = render(RichText, { props: Basic.args });
  expect(() => results.getByText("This is an italic text")).not.toThrow();
});
