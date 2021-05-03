import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";

import { Basic } from "./LoadingIndicator.stories";
import LoadingIndicator from "./storybook-views/Default.svelte";

test("shows proper label", () => {
  const results = render(LoadingIndicator, { props: Basic.args });
  () => results.getByRole(LoadingIndicator).toHaveClass;
});
