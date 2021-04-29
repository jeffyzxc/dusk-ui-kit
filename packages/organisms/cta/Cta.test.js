import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";

import Cta from "./storybook-views/Default.svelte";
import { Basic } from "./Cta.stories";

test("shows proper label", () => {
  const results = render(Cta, { props: Basic.args });
  expect(() => results.getByText("This is a call to Action button")).not.toThrow();
});
