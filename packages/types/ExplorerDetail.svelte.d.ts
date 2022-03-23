
  /// <reference types="svelte" />
  import { SvelteComponentTyped } from "svelte";
  
  
  
  
    export interface ExplorerDetailProps  {
      
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
  
  
  export default class ExplorerDetail extends SvelteComponentTyped<
      ExplorerDetailProps,
      {},
      {["detail-details"]: { height: any, width: any, isLoading: {isLoading['details']} }
;
["detail-list"]: { height: any, width: any, isLoading: {isLoading['list']} }
;
error: {}
;
footer: {}
;
loading: {}
;
navbar: {}
;}
    > {
      
    }