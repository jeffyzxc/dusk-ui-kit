<script context="module">
  import { base } from "$app/paths";

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, stuff }) {
    const redirect = `${base}/components/${page.params.group}/${page.params.package}/${
      Object.entries(stuff.components[page.params.group][page.params.package])[0][0]
    }`;

    return {
      status: 301,
      redirect: redirect,
    };
  }
</script>
