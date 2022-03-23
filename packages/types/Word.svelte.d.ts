/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WordProps {
  /**
   * Sets the value of Word.
   * @default undefined
   */
  value?: undefined;

  /**
   * Sets the index used to select the clicked word.
   * @default undefined
   */
  index?: undefined;

  /**
   * Sets if the Word is disabled.
   * @default undefined
   */
  disabled?: undefined;

  /**
   * Sets the `id` of the Word if set, otherwise the ID is generated.
   * @default "__DUK-mnemonic-word" + Math.random().toString(36)
   */
  id?: string;
}

export default class Word extends SvelteComponentTyped<
  WordProps,
  { paste: CustomEvent<any> },
  {}
> {}
