import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";

import Menu from "./storybook-views/Default.svelte";
import { Basic } from "./Menu.stories";

test("shows proper item value", () => {
  const results = render(Menu, { props: Basic.args });
  expect(() => results.getByText("Navigation item 1")).not.toThrow();
});
