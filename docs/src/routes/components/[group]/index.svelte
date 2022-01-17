<script context="module">
  import { base } from "$app/paths";

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ params, stuff }) {
    const { group } = params;

    let redirect = `${base}/components/${group}/${Object.entries(stuff.components[group])[0][0]}`;

    return {
      status: 301,
      redirect: redirect,
    };
  }
</script>
