/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SearchListProps {
  /**
   * Provides the dataset to be searched over.
   * @default []
   */
  data?: [];

  /**
   * Used to add a search button to the input field when true
   * @default false
   */
  fieldButton?: boolean;
}

export default class SearchList extends SvelteComponentTyped<
  SearchListProps,
  {},
  { default: {} }
> {
  dataSearchResults: undefined;
}
