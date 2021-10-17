<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    const res = await fetch("/components.json");

    if (res.ok) {
      const components = await res.json();
      return {
        stuff: {
          components,
        },
        props: {
          components,
        },
      };
    }
  }
</script>

<script>
  import "@dusk-network/styles/tailwind.css";
  import Nav from "$lib/Nav.svelte";
  import Footer from "@dusk-network/footer";

  export let components;
</script>

<Nav components="{components}" />
<main class="container">
  <slot />
</main>
<Footer type="minimal" variant="brand" />
