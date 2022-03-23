/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ItemProps {
  /**
   * @default undefined
   */
  iconName?: undefined;

  /**
   * @default "0 0 24 24"
   */
  iconViewbox?: string;
}

export default class Item extends SvelteComponentTyped<
  ItemProps,
  {},
  { content: {}; title: {} }
> {}
