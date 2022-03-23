/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MenuProps {
  /**
   * Sets the orientation of the Menu.
   * @default undefined
   */
  orientation?: "horizontal" | "vertical";

  /**
   * Sets the `id` of the Menu if set, otherwise the ID is generated.
   * @default "__DUK-menu" + Math.random().toString(36)
   */
  id?: string;

  /**
   * Sets the `name` attribute on the Menu.
   * @default ""
   */
  name?: string;
}

export default class Menu extends SvelteComponentTyped<
  MenuProps,
  {},
  { default: {}; title: {} }
> {}
