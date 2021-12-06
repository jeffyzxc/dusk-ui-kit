/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import WalletDashboard from "./WalletDashboard.svelte";

test("Component renders", () => {
  const results = render(WalletDashboard, {});
  expect(() => results.toHaveClass("duk-wallet-dashboard"));
});
