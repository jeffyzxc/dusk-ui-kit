/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WalletWizardProps {
  /**
   * Toggles the template global loading state if a boolean, otherwise an object that maps to the slots
   * that are loading.
   * @default false
   */
  isLoading?: "boolean" | "object";

  /**
   * Toggles the template error state.
   * @default false
   */
  isError?: boolean;
}

export default class WalletWizard extends SvelteComponentTyped<
  WalletWizardProps,
  {},
  { error: {}; footer: {}; loading: {}; navbar: {}; wizard: {} }
> {}
