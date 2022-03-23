
  /// <reference types="svelte" />
  import { SvelteComponentTyped } from "svelte";
  
  
  
  
    export interface ExplorerHomepageProps  {
      
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
  
  
  export default class ExplorerHomepage extends SvelteComponentTyped<
      ExplorerHomepageProps,
      {},
      {["control-panel"]: { isLoading: {isLoading['control_panel']} }
;
error: {}
;
footer: {}
;
["latest-blocks"]: { isLoading: {isLoading['latest_blocks']} }
;
["latest-transactions"]: { isLoading: {isLoading['latest_transactions']} }
;
loading: {}
;
navbar: {}
;}
    > {
      
    }