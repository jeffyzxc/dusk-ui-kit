/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CtaListProps {
  /**
   * Sets the variant of the CTA List.
   * @default undefined
   */
  variant?: "brand" | "cta" | "info" | "success" | "warning" | "danger";

  /**
   * Sets the type of the CTA List.
   * @default undefined
   */
  type?: "ordered" | "unordered";
}

export default class CtaList extends SvelteComponentTyped<
  CtaListProps,
  {},
  { default: {} }
> {}
