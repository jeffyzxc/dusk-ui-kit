/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AccordionProps {
  /**
   * Sets the Accordion so multiple items can be opened at the same time when true.
   * @default false
   */
  multiselect?: boolean;
}

export default class Accordion extends SvelteComponentTyped<
  AccordionProps,
  {},
  { default: {} }
> {}
