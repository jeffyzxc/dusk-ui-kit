<script context="module">
  import { base } from "$app/paths";

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, stuff }) {
    const { group } = page.params;

    let redirect = `${base}/${Object.entries(stuff.components[group])[0][0]}`;

    return {
      status: 301,
      redirect: redirect,
    };
  }
</script>
