import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";

import Button from "./storybook-views/Default.svelte";

test("shows proper label", () => {
  const results = render(Button, { buttonText: "a button" });
  expect(() => results.getByText("a button")).not.toThrow();
});
