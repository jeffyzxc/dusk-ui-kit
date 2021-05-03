import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";

import Form from "./storybook-views/Default.svelte";
import { Basic } from "./Form.stories";

test("shows proper placeholder", () => {
  const results = render(Form, { props: Basic.args });
  () => results.getAllByRole(Form).toHaveClass;
});
