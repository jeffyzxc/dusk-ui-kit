/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AppsMenuProps {
  /**
   * @default undefined
   */
  apps?: undefined;

  /**
   * @default undefined
   */
  appName?: undefined;
}

export default class AppsMenu extends SvelteComponentTyped<
  AppsMenuProps,
  {},
  {}
> {}
