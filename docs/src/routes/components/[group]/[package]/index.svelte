<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch }) {
    let [packages] = await Promise.all([fetch(`../../components.json`).then((r) => r.json())]);
    console.log("package content", packages[page.params.group][page.params.package]);
    const pack = packages[page.params.group][page.params.package];

    return {
      props: { pack },
    };
  }
</script>

<script>
  import { page } from "$app/stores";
  export let pack;

  // const packages = [...group];

  console.log("package is", pack);

  // packages.forEach(element => {
  //   console.log("package item", item);
  // });

  // console.log($page.params)
</script>

<ul>
  {#each Object.entries(pack) as item}
    <li><a href="{$page.params.package}/{item[0]}">{item[0]}</a></li>
  {/each}
</ul>
