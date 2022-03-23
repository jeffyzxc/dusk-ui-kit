/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MinimalProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default undefined
   */
  copyright?: undefined;

  /**
   * @default undefined
   */
  social?: undefined;
}

export default class Minimal extends SvelteComponentTyped<
  MinimalProps,
  {},
  {}
> {}
