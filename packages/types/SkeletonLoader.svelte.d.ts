/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SkeletonLoaderProps {
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

  /**
   * Sets the height of the skeleton loader on an extra small screen in pixels.
   * @default undefined
   */
  extraSmallScreenHeight?: undefined;

  /**
   * Sets the height of the skeleton loader on a small screen in pixels.
   * @default undefined
   */
  smallScreenHeight?: undefined;

  /**
   * Sets the height of the skeleton loader on a medium screen in pixels.
   * @default undefined
   */
  mediumScreenHeight?: undefined;

  /**
   * Sets the height of the skeleton loader on a large screen in pixels.
   * @default undefined
   */
  largeScreenHeight?: undefined;

  /**
   * Sets the height of the skeleton loader on an extra large screen in pixels.
   * @default undefined
   */
  extraLargeScreenHeight?: undefined;

  /**
   * Sets the height of the skeleton loader on a jumbo screen in pixels.
   * @default undefined
   */
  jumboScreenHeight?: undefined;

  /**
   * Sets the width of the skeleton loader.
   * @default "100%"
   */
  width?: string;

  /**
   * Sets the animation type to pulse when true.
   * @default false
   */
  pulse?: boolean;

  /**
   * Sets corners to be rounded when true.
   * @default false
   */
  rounded?: boolean;
}

export default class SkeletonLoader extends SvelteComponentTyped<
  SkeletonLoaderProps,
  {},
  {}
> {}
