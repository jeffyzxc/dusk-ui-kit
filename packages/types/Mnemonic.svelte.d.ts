/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MnemonicProps {
  /**
   * Sets the array of objects that populate Mnemonic.
   * @default []
   */
  seed?: [];

  /**
   * Sets the type of Mnemonic.
   * @default undefined
   */
  type?: "authenticate" | "preview" | "confirm";

  /**
   * Sets the total number of items that populate Mnemonic.
   * @default 12
   */
  length?: number;

  /**
   * Sets if the Mnemonic should be disabled.
   * @default false
   */
  disabled?: boolean;
}

export default class Mnemonic extends SvelteComponentTyped<
  MnemonicProps,
  { complete: CustomEvent<any>; passed: CustomEvent<any> },
  {}
> {}
