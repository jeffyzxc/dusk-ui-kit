
  /// <reference types="svelte" />
  import { SvelteComponentTyped } from "svelte";
  
  
  
  
    export interface ExplorerChartsProps  {
      
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
  
  
  export default class ExplorerCharts extends SvelteComponentTyped<
      ExplorerChartsProps,
      {},
      {["blockchain-data"]: { isLoading: {isLoading['blockchain_data']} }
;
error: {}
;
footer: {}
;
loading: {}
;
map: { isLoading: {isLoading['map']} }
;
["market-data"]: { isLoading: {isLoading['market_data']} }
;
navbar: {}
;}
    > {
      
    }