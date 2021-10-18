<script context="module">
  import { base } from "$app/paths";

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, stuff }) {
    const pack = stuff.components[page.params.group][page.params.package];
    console.log(page);
    console.log("redirecting with base", base);
    const redirect = `${base}/${Object.entries(pack)[0][0]}`;

    return {
      status: 301,
      redirect: redirect,
    };
  }
</script>
