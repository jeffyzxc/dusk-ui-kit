/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ProgressBarProps {
  /**
   * Sets the variant of the Progress Bar.
   * @default undefined
   */
  variant?: "brand" | "cta" | "info" | "success" | "warning" | "danger";

  /**
   * Sets the number of steps the progress bar will have.
   * @default 2
   */
  steps?: !number;

  /**
   * Sets the initial step for the progress bar when rendered.
   * @default 1
   */
  step?: !number;
}

export default class ProgressBar extends SvelteComponentTyped<
  ProgressBarProps,
  {},
  {}
> {}
