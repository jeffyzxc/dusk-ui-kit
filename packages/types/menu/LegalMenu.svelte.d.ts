/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LegalMenuProps {
  /**
   * @default undefined
   */
  orientation?: undefined;
}

export default class LegalMenu extends SvelteComponentTyped<
  LegalMenuProps,
  {},
  {}
> {}
