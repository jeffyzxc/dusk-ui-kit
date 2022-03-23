/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WalletHomepageProps {
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

export default class WalletHomepage extends SvelteComponentTyped<
  WalletHomepageProps,
  {},
  {
    ["about-dusk"]: {};
    ["cta-access"]: {};
    ["cta-create"]: {};
    error: {};
    faq: {};
    footer: {};
    hero: {};
    ["info-access"]: {};
    ["info-security"]: {};
    loading: {};
    navbar: {};
  }
> {}
