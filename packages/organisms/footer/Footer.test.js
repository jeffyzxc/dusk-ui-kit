import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";

import Footer from "./storybook-views/Default.svelte";
import { Basic } from "./Footer.stories";

test("shows proper placeholder", () => {
  const results = render(Footer, { props: Basic.args });
  () => results.getAllByRole(Footer).toHaveClass();
});
