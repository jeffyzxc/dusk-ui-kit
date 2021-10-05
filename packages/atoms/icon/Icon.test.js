/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Icon from "./Icon.svelte";
//import { Basic } from "./Icon.stories";

// test("shows proper icon", () => {
//   const results = render(Icon, { props: Basic.args });
//   () => results.getByRole(Icon).toHaveClass;
// });

test("it renders", () => {
  const results = render(Icon, {
    props: { name: "dusk-ticker" },
  });
  expect(() => results.toHaveClass("duk-icon"));
});
