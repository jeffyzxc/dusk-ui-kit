<script context="module">
  import { base } from "$app/paths";

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, stuff }) {
    const pack = stuff.components[page.params.group][page.params.package];
    const redirect = `${base}/components/${page.params.group}/${
      Object.entries(stuff.components[page.params.group])[0][0]
    }/${Object.entries(pack)[0][0]}`;

    return {
      status: 301,
      redirect: redirect,
    };
  }
</script>
