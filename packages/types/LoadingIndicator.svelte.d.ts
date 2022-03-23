/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LoadingIndicatorProps {
  /**
   * Sets the variant of the Loading Indicator.
   * @default undefined
   */
  variant?: "brand" | "cta" | "info" | "success" | "warning" | "danger";

  /**
   * Sets the duration of the Loading Indicator animation cycle.
   * @default "1.3s"
   */
  duration?: string;
}

export default class LoadingIndicator extends SvelteComponentTyped<
  LoadingIndicatorProps,
  {},
  {}
> {}
