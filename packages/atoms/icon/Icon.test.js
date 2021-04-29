import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";

import Icon from "./storybook-views/Collection.svelte";
import { Basic } from "./Icon.stories";

test("shows proper icon", () => {
  const results = render(Icon, { props: Basic.args });
  () => results.getByRole(Icon).toHaveClass;
});
