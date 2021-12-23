/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import WalletOption from "./WalletOption.svelte";

test("Component renders", () => {
  const results = render(WalletOption, {});
  expect(() => results.toHaveClass("duk-wallet-option"));
});
