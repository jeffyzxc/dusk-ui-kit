<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ params, stuff }) {
    const group = Object.keys(stuff.components)
      .filter((key) => key === params.group)
      .reduce((obj, key) => {
        obj = stuff.components[key];
        return obj;
      }, {});

    return {
      props: { group },
    };
  }
</script>

<script>
  import { page } from "$app/stores";
  import Sidebar from "$lib/Sidebar.svelte";

  export let group;

  $: groupTitle = $page.params.group;
  $: navTitle = groupTitle.charAt(0).toUpperCase() + groupTitle.slice(1);
</script>

<div class="flex flex-row flex-wrap py-4">
  <aside class="w-full lg:w-1/4 px-2 lg:pr-20">
    <Sidebar title="{navTitle}" group="{group}" />
  </aside>
  <div role="main" class="w-full lg:w-3/4 pt-1 px-2">
    <slot group="{group}" />
  </div>
</div>
