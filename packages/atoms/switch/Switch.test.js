import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import { Basic } from "./Switch.stories";
import Switch from "./storybook-views/Default.svelte";

test("shows proper label", () => {
  const results = render(Switch, { props: Basic.args });
  expect(() => results.getByText("It's off!")).not.toThrow();
});
