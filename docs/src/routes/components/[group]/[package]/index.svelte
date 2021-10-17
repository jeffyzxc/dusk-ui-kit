<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, stuff }) {
    const pack = stuff.components[page.params.group][page.params.package];

    let redirect = `${page.path}/${Object.entries(pack)[0][0]}`;

    return {
      status: 301,
      redirect: redirect,
    };
  }
</script>
