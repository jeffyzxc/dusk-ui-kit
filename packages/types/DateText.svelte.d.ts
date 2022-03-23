/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DateTextProps {
  /**
   * The time string that needs to be formatted
   * @default ""
   */
  time?: string;

  /**
   * Show and additional timestamp after the formatted time.
   * @default false
   */
  showTimestamp?: boolean;

  /**
   * The format of the time string.
   * @default "YYYY-MM-DD HH:mm:ss ZZ"
   */
  datetimeFormat?: string;
}

export default class DateText extends SvelteComponentTyped<
  DateTextProps,
  {},
  {}
> {}
