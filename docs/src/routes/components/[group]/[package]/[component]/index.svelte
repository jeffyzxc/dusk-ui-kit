<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch }) {
    let [components] = await Promise.all([fetch(`../../../components.json`).then((r) => r.json())]);
    // console.log(components[page.params.group][page.params.package][page.params.component])
    const meta = components[page.params.group][page.params.package][page.params.component];
    const title = page.params.component;

    return {
      props: { title, meta },
    };
  }
</script>

<script>
  import RichText from "@dusk-network/rich-text";
  // import { page } from "$app/stores";
  export let meta;
  export let title;

  console.log("meta is", meta);

  // console.log($page.params)
</script>

<RichText>
  <h1>{title}</h1>
  <code>
    {meta}
  </code>
</RichText>
