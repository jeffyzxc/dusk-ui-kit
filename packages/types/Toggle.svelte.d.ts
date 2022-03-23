/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ToggleProps {
  /**
   * Sets the variant of the Toggle.
   * @default undefined
   */
  variant?: "brand" | "cta" | "info" | "success" | "warning" | "danger";

  /**
   * Sets the type of the Toggle.
   * @default undefined
   */
  type?: "checkbox" | "radio";

  /**
   * Sets the `name` attribute on the Toggle.
   * @default ""
   */
  name?: string;

  /**
   * Sets the `checked` attrtibute on the Toggle when true.
   * @default false
   */
  checked?: boolean;

  /**
   * Sets the `id` of the Toggle if set, otherwise the ID is generated.
   * @default "__DUK-toggle" + Math.random().toString(36)
   */
  id?: string;

  /**
   * Used as a switch when the Toggle is clicked.
   * @default false
   */
  value?: boolean;

  /**
   * Used to bind the Toggle to a group.
   * @default false
   */
  group?: boolean;

  /**
   * Sets the `disabled` attribute on the Toggle when true.
   * @default false
   */
  disabled?: boolean;

  /**
   * Sets the selected state of the Toggle when true.
   * @default false
   */
  selected?: boolean;

  /**
   * Used to set the On icon of the Toggle switch thumb.
   * @default ""
   */
  onIcon?: string;

  /**
   * Used to set the Off icon of the Toggle switch thumb.
   * @default ""
   */
  offIcon?: string;
}

export default class Toggle extends SvelteComponentTyped<
  ToggleProps,
  { click: WindowEventMap["click"]; change: WindowEventMap["change"] },
  { default: {} }
> {}
