/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LinksMenuProps {
  /**
   * @default undefined
   */
  links?: undefined;
}

export default class LinksMenu extends SvelteComponentTyped<
  LinksMenuProps,
  {},
  {}
> {}
