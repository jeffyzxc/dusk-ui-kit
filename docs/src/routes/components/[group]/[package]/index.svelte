<script context="module">
  import { base } from "$app/paths";

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ params, stuff }) {
    const redirect = `${base}/components/${params.group}/${params.package}/${
      Object.entries(stuff.components[params.group][params.package])[0][0]
    }`;

    return {
      status: 301,
      redirect: redirect,
    };
  }
</script>
