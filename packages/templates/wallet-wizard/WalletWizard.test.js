/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import WalletWizard from "./WalletWizard.svelte";

test("Component renders", () => {
  const results = render(WalletWizard, {});
  expect(() => results.toHaveClass("duk-wallet-wizard"));
});
