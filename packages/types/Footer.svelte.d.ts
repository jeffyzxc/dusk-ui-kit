/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FooterProps {
  /**
   * Sets the variant of the Button.
   * @default undefined
   */
  type?: "maximal" | "minimal";

  /**
   * Sets the object used to define the social icons and their links.
   * @default undefined
   */
  social?: undefined;

  /**
   * Sets the object used to define the sitemap and it's links.
   * @default undefined
   */
  categories?: undefined;
}

export default class Footer extends SvelteComponentTyped<FooterProps, {}, {}> {}
