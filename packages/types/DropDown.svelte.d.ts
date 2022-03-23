/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DropDownProps {
  /**
   * Used as an array to hold the DropDown options
   * @default []
   */
  options?: [];

  /**
   * Used to indicate the selected option
   * @default 0
   */
  selectedIndex?: number;

  /**
   * Sets the opened direction of the DropDown to up when true
   * @default false
   */
  dropUp?: boolean;

  /**
   * Disables to the DropDown when true
   * @default false
   */
  disabled?: boolean;
}

export default class DropDown extends SvelteComponentTyped<
  DropDownProps,
  { select: CustomEvent<any> },
  {}
> {}
