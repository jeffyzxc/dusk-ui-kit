/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AlertProps {
  /**
   * Used to display the Alert when true.
   * @default false
   */
  value?: boolean;

  /**
   * Sets the `id` of the Alert if set, otherwise the ID is generated.
   * @default "__DUK-alert-" + Math.random().toString(36)
   */
  id?: string;

  /**
   * Sets the Alert to be dismissable when true.
   * @default false
   */
  dismissable?: boolean;

  /**
   * Sets the variant of the Alert.
   * @default undefined
   */
  variant?: "success" | "warning" | "danger";

  /**
   * Sets the Alert as a modal.
   * @default false
   */
  modal?: boolean;
}

export default class Alert extends SvelteComponentTyped<
  AlertProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    focus: WindowEventMap["focus"];
  },
  { default: {}; actions: {}; icon: {}; title: {} }
> {}
