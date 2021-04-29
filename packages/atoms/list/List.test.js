import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import { Basic } from "./List.stories";
import List from "./storybook-views/Default.svelte";

test("shows proper List Item", () => {
  const results = render(List, { props: Basic.args });
  expect(() => results.getByText("List")).not.toThrow();
});
