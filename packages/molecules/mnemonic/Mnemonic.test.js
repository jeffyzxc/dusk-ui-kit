/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
// import { Basic } from "./Mnemonic.stories";
import Mnemonic from "./Mnemonic.svelte";

// test("shows proper label", () => {
//   const results = render(Mnemonic, { props: Basic.args });
//   expect(() => results.getByText("Hi I'm a Mnemonic")).not.toThrow();
// });

test("Component renders", () => {
  const results = render(Mnemonic);
  expect(() => results.toHaveClass("duk-mnemonic"));
});
