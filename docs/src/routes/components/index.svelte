<script context="module">
  import { base } from "$app/paths";

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load() {
    let redirect = `${base}/components/atoms`;

    return {
      status: 301,
      redirect: redirect,
    };
  }
</script>
