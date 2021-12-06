/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import WalletHomepage from "./WalletHomepage.svelte";

test("Component renders", () => {
  const results = render(WalletHomepage, {});
  expect(() => results.toHaveClass("duk-wallet-homepage"));
});
