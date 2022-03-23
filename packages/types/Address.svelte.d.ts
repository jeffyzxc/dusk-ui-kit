/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AddressProps {
  /**
   * Sets the variant of the Address.
   * @default undefined
   */
  variant?:
    | "brand"
    | "cta"
    | "info"
    | "default"
    | "success"
    | "warning"
    | "danger";
}

export default class Address extends SvelteComponentTyped<
  AddressProps,
  {},
  { default: {} }
> {}
