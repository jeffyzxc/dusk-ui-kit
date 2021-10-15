<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch }) {
    let [components] = await Promise.all([fetch(`../components.json`).then((r) => r.json())]);
    // console.log(components);
    // console.log(page);
    const group = Object.keys(components)
      .filter((key) => key === page.params.group)
      .reduce((obj, key) => {
        obj = components[key];
        return obj;
      }, {});

    return {
      props: { group },
    };
  }
</script>

<script>
  import { page } from "$app/stores";
  export let group;

  // const components = [...group];

  console.log(group);

  // components.forEach(element => {
  //   console.log("component item", item);
  // });

  console.log($page.params);
</script>

<ul>
  {#each Object.entries(group) as component}
    <li><a href="{$page.params.group}/{component[0]}">{component[0]}</a></li>
  {/each}
</ul>
