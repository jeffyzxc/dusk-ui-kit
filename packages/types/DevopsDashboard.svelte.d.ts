
  /// <reference types="svelte" />
  import { SvelteComponentTyped } from "svelte";
  
  
  
  
    export interface DevopsDashboardProps  {
      
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
  
  
  export default class DevopsDashboard extends SvelteComponentTyped<
      DevopsDashboardProps,
      {},
      {["deployed-networks"]: { isLoading: {isLoading['deployed_networks']} }
;
error: {}
;
footer: {}
;
loading: {}
;
map: { isLoading: {isLoading['map']} }
;
navbar: {}
;
["node-status"]: { isLoading: {isLoading['node_status']} }
;}
    > {
      
    }