/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PasswordStrengthProps {
  /**
   * Sets the password value used by PasswordStrengh.
   * @default ""
   */
  password?: string;
}

export default class PasswordStrength extends SvelteComponentTyped<
  PasswordStrengthProps,
  { strength: CustomEvent<any> },
  { default: { strength: any } }
> {}
