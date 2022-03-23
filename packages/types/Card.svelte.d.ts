
  /// <reference types="svelte" />
  import { SvelteComponentTyped } from "svelte";
  
  
  
  
    export interface CardProps  {
      
      /**
* Sets the variant of the Card.
* @default undefined
*/
      variant?: "brand" | "cta" | "info" | "success" | "warning" | "danger" ;

      /**
* Sets the state of the Card. Only works with default variant.
* @default undefined
*/
      state?:  "passed" | "error" | "danger" ;

      /**
* Renders the Card as an `a` tag when set.
* @default ""
*/
      href?: string;

      /**
* Sets the `disabled` attribute on the Card when true.
* @default false
*/
      disabled?: boolean;

      /**
* Sets the `overflow hidden` attribute on the Card when true.
* @default false
*/
      overflow?: boolean;
    }
  
  
  export default class Card extends SvelteComponentTyped<
      CardProps,
      {*: WindowEventMap["*"];},
      {default: {}
;}
    > {
      
    }