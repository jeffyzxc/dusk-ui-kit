import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";

import Dialog from "./storybook-views/Default.svelte";
import { Basic } from "./Dialog.stories";

test("shows proper label", () => {
  const results = render(Dialog, { props: Basic.args });
  expect(() => results.getByText("Show dialog")).not.toThrow();
});
