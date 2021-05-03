import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import { Basic } from "./Alert.stories";
import Alert from "./storybook-views/Default.svelte";

test("shows proper label", () => {
  const results = render(Alert, { props: Basic.args });
  expect(() => results.getByText("This is an alert!")).not.toThrow();
});
