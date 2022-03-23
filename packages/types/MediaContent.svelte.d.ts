/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MediaContentProps {
  /**
   * Reverses the order of presentation
   * @default false
   */
  reverse?: boolean;

  /**
   * Aligns the content
   * @default "left"
   */
  align?: "left" | "center" | "right";

  /**
   * Vertically aligns the content
   * @default "middle"
   */
  valign?: "top" | "middle" | "bottom";

  /**
   * Image sizing policy
   * @default "max-content"
   */
  imageFit?: "max-content";
  "fit-content";
  "min-content";
}

export default class MediaContent extends SvelteComponentTyped<
  MediaContentProps,
  {},
  { media: {}; text: {} }
> {}
