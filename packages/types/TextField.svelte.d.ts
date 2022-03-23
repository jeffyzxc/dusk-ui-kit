/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TextFieldProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["input"]> {
  /**
   * Sets value to prepopulate the Text Field.
   * @default ""
   */
  value?: string;

  /**
   * Sets the Text Field to be disabled when true.
   * @default false
   */
  disabled?: boolean;

  /**
   * Sets the Text Field to be a textarea when true.
   * @default false
   */
  multiline?: boolean;

  /**
   * Sets the Text Field placeholder.
   * @default ""
   */
  placeholder?: string;

  /**
   * Sets the state of the Text Field
   * @default undefined
   */
  state?: "success" | "warning" | "danger";

  /**
   * Sets the `id` of the Text Field if set, otherwise the ID is generated.
   * @default "__DUK-text-field" + Math.random().toString(36)
   */
  id?: string;

  /**
   * Sets the Text Field name.
   * @default ""
   */
  name?: string;

  /**
   * Sets the Text Field as focused when true.
   * @default false
   */
  focused?: boolean;
}

export default class TextField extends SvelteComponentTyped<
  TextFieldProps,
  {
    blur: WindowEventMap["blur"];
    change: WindowEventMap["change"];
    click: WindowEventMap["click"];
    focus: WindowEventMap["focus"];
    input: WindowEventMap["input"];
    keydown: WindowEventMap["keydown"];
    keypress: WindowEventMap["keypress"];
    keyup: WindowEventMap["keyup"];
    paste: WindowEventMap["paste"];
  },
  {}
> {}
