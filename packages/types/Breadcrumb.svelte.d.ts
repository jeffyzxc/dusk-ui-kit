/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BreadcrumbProps {
  /**
   * Renders the Breadcrumb as an `a` tag when set.
   * @default ""
   */
  href?: string;
}

export default class Breadcrumb extends SvelteComponentTyped<
  BreadcrumbProps,
  { exit: CustomEvent<any> },
  { default: {} }
> {}
