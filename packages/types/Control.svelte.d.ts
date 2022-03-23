
  /// <reference types="svelte" />
  import { SvelteComponentTyped } from "svelte";
  
  
  
  
    export interface ControlProps  {
      
      /**
* Sets the type of the Control.
* @default undefined
*/
      type?:  "stacked" | "inline-fixed" | "inline-flex" ;

      /**
* Sets the state of the Control.
* @default undefined
*/
      state?:  "success" | "warning" | "danger" ;

      /**
* Sets the `id` of the Control if set, otherwise the ID is generated.
* @default "__DUK-control" + Math.random().toString(36)
*/
      id?: string;

      /**
* Sets the label of the Control if set.
* @default ""
*/
      label?: string;

      /**
* Sets the warning message of the Control if set.
* @default ""
*/
      message?: string;

      /**
* Sets the width of the Control inside current container.
* @default undefined
*/
      width?:  "full" | "half" | "quarter" ;

      /**
* Set the `name` attribute on the Control when used.
* @default ""
*/
      name?: string;

      /**
* Set the Control as part of a group when true.
* @default false
*/
      group?: boolean;
    }
  
  
  export default class Control extends SvelteComponentTyped<
      ControlProps,
      {},
      {default: { id: any, state: any }
;
buttonPostfix: { variant: {state === 'default' ? 'brand' : state} }
;
buttonPrefix: { variant: {state === 'default' ? 'brand' : state} }
;}
    > {
      
    }