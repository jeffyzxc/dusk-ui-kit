<script context="module">
  export async function load({ page, stuff }) {
    const { group } = page.params;

    let redirect = `/components/${group}/${Object.entries(stuff.components[group])[0][0]}`;

    return {
      status: 301,
      redirect: redirect,
    };
  }
</script>
