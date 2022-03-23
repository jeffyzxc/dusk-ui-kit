/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StepListProps {
  /**
   * Sets the variant of the step-list.
   * @default undefined
   */
  variant?: "brand" | "cta" | "info" | "success" | "warning" | "danger";
}

export default class StepList extends SvelteComponentTyped<
  StepListProps,
  {},
  { default: {} }
> {}
