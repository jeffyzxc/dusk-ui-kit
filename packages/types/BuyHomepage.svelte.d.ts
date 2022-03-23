
  /// <reference types="svelte" />
  import { SvelteComponentTyped } from "svelte";
  
  
  
  
    export interface BuyHomepageProps  {
      
      /**
* Toggles the template global loading state if a boolean, otherwise an object that maps to the slots
* that are loading.
* @default false
*/
      isLoading?:  "boolean" | "object" ;

      /**
* Toggles the template error state.
* @default false
*/
      isError?: boolean;
    }
  
  
  export default class BuyHomepage extends SvelteComponentTyped<
      BuyHomepageProps,
      {},
      {error: {}
;
footer: {}
;
hero: { isLoading: {isLoading['hero']} }
;
loading: {}
;
marketplace: { isLoading: {isLoading['markets']} }
;
navbar: {}
;
steps: { isLoading: {isLoading['steps']} }
;}
    > {
      
    }