/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ErrorBlockProps {
  /**
   * The response HTTP code for the Error Block
   * @default null
   */
  code?: undefined;

  /**
   * Sets the message for the Error Block
   * @default null
   */
  message?: undefined;

  /**
   * Sets the stack trace of the Error Block
   * @default null
   */
  stack?: undefined;

  /**
   * Shows the Error object stack based on application mode
   * @default null
   */
  dev?: undefined;
}

export default class ErrorBlock extends SvelteComponentTyped<
  ErrorBlockProps,
  {},
  {}
> {}
