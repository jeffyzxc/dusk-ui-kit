/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChipProps {
  /**
   * Sets the variant of the Chip.
   * @default undefined
   */
  variant?: "brand" | "cta" | "info" | "success" | "warning" | "danger";
}

export default class Chip extends SvelteComponentTyped<
  ChipProps,
  {},
  { default: {} }
> {}
