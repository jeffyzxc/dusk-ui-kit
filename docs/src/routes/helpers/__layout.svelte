<script context="module">
  import * as Helpers from "@dusk-network/helpers";

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load() {
    return {
      props: { helpers: Helpers },
    };
  }
</script>

<script>
  import Sidebar from "$lib/Sidebar.svelte";

  export let helpers;
</script>

<div class="flex flex-row flex-wrap py-4">
  <aside class="w-full lg:w-1/4 px-2 lg:pr-20">
    <Sidebar title="Helpers" group="{helpers}" />
  </aside>
  <div role="main" class="w-full lg:w-3/4 pt-1 px-2">
    <slot />
  </div>
</div>
