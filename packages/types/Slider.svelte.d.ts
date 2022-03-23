/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SliderProps {
  /**
   * Sets the bottom limit of the Slider.
   * @default undefined
   */
  min?: undefined;

  /**
   * Sets the top limit of the Slider.
   * @default undefined
   */
  max?: undefined;

  /**
   * Sets the value of the slider when rendered if set, otherwise it is set to 50.
   * @default 50
   */
  value?: number;

  /**
   * Sets the `id` of the Slider if set, otherwise the ID is generated.
   * @default "__DUK-slider" + Math.random().toString(36)
   */
  id?: string;
}

export default class Slider extends SvelteComponentTyped<
  SliderProps,
  { slide: CustomEvent<any> },
  {}
> {}
