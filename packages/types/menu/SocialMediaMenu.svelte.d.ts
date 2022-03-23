/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SocialMediaMenuProps {
  /**
   * @default undefined
   */
  orientation?: undefined;

  /**
   * @default undefined
   */
  social?: undefined;
}

export default class SocialMediaMenu extends SvelteComponentTyped<
  SocialMediaMenuProps,
  {},
  {}
> {}
