/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ButtonProps {
  /**
   * Sets the `id` of the Button if set, otherwise the ID is generated.
   * @default "__DUK-button" + Math.random().toString(36)
   */
  id?: string;

  /**
   * Used as a switch when the button is clicked.
   * @default false
   */
  value?: boolean;

  /**
   * Sets the variant of the Button.
   * @default undefined
   */
  variant?: "brand" | "cta" | "info" | "success" | "warning" | "danger";

  /**
   * Sets the size of the Button.
   * @default undefined
   */
  size?: "sm" | "lg";

  /**
   * Sets the Button to outlined when true.
   * @default false
   */
  outline?: boolean;

  /**
   * Sets the Button to have circular edges when true.
   * @default false
   */
  circle?: boolean;

  /**
   * Sets the Button to act as a block element when true.
   * @default false
   */
  block?: boolean;

  /**
   * Renders the Button as an `a` tag when set.
   * @default ""
   */
  href?: string;

  /**
   * Sets the `active` attribute on the BUtton when true.
   * @default false
   */
  active?: boolean;

  /**
   * Sets the `disabled` attribute on the Button when true.
   * @default false
   */
  disabled?: boolean;

  /**
   * Sets the `aria-label` attribute on the Button
   * @default undefined
   */
  label?: undefined;
}

export default class Button extends SvelteComponentTyped<
  ButtonProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    focus: WindowEventMap["focus"];
  },
  { default: {}; labelLeft: {}; labelRight: {} }
> {}
