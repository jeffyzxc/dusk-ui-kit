/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface IconProps {
  /**
   * Used to select the icon based on icon name.
   * @default null
   */
  name?: undefined;

  /**
   * Sets the size of the Icon.
   * @default undefined
   */
  size?: "xs" | "sm" | "lg" | "xl" | "xxl" | "xxxl";

  /**
   * Sets the variant of the Icon.
   * @default null
   */
  variant?: "brand" | "cta" | "info" | "success" | "warning" | "danger";

  /**
   * Sets the Icon to have a tooltip when passed a string
   * @default false
   */
  tooltip?: boolean;

  /**
   * Sets the Icon svg viewbox when a string is passed, default is "0 0 24 24"
   * @default "0 0 24 24"
   */
  viewbox?: string;

  /**
   * Sets the variant of the Icon.
   * @default null
   */
  tooltipVisible?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}

export default class Icon extends SvelteComponentTyped<
  IconProps,
  { click: WindowEventMap["click"] },
  {}
> {}
