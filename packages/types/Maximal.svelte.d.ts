/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MaximalProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default undefined
   */
  categories?: undefined;
}

export default class Maximal extends SvelteComponentTyped<
  MaximalProps,
  {},
  {}
> {}
