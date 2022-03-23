/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StepProps {
  /**
   * @default undefined
   */
  number?: undefined;
}

export default class Step extends SvelteComponentTyped<
  StepProps,
  {},
  { default: { next: any; previous: any } }
> {}
