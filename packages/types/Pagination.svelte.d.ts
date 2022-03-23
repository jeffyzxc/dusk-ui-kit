/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PaginationProps {
  /**
   * Sets the `ref` attribute on the Pagination
   * @default ""
   */
  ref?: string;

  /**
   * Sets the data used by Pagination.
   * @default []
   */
  items?: [];

  /**
   * Sets the number of items per page.
   * @default 10
   */
  itemsPerPage?: number;

  /**
   * Sets the page number og Pagination
   * @default 1
   */
  pageNumber?: number;
}

export default class Pagination extends SvelteComponentTyped<
  PaginationProps,
  { pagination: CustomEvent<any> },
  {}
> {}
