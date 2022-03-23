/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CategoryMenuProps {
  /**
   * @default undefined
   */
  category?: undefined;
}

export default class CategoryMenu extends SvelteComponentTyped<
  CategoryMenuProps,
  {},
  {}
> {}
