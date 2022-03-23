/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DefaultProps {
  /**
   * Toggles the template loading state if a boolean, otherwise an object that maps to the slots
   * that are loading can be provided and used in the app template.
   * @default false
   */
  isLoading?: "boolean" | "object";

  /**
   * Toggles the template error state.
   * @default false
   */
  isError?: boolean;
}

export default class Default extends SvelteComponentTyped<
  DefaultProps,
  {},
  {
    default: { width: any; height: any };
    error: {};
    footer: {};
    loading: {};
    navbar: {};
  }
> {}
