/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WizardProps {
  /**
   * Sets the maximum number of steps in the Wizard.
   * @default 2
   */
  stepCount?: number;
}

export default class Wizard extends SvelteComponentTyped<
  WizardProps,
  { exit: CustomEvent<any>; step: CustomEvent<any> },
  {
    default: { next: any; previous: any };
    ["progress-bar"]: { steps: any; step: any };
    title: {};
  }
> {}
