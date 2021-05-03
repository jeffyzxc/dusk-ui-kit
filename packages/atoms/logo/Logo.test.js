import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";

import Logo from "./storybook-views/Default.svelte";
import { Basic } from "./Logo.stories";

test("shows proper placeholder", () => {
  const results = render(Logo, { props: Basic.args });
  () => results.getByRole(Logo).toHaveClass;
});
