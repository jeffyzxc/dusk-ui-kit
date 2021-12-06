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
  import "./styles.css";
  import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query";
  import "@dusk-network/styles/tailwind.css";
  import "svelte-highlight/src/styles/github-dark.css";
  import Nav from "$lib/Nav.svelte";
  import Template from "@dusk-network/default";
  import Footer from "@dusk-network/footer";

  const queryClient = new QueryClient();

  export let components;
</script>

<Template>
  <svelte:fragment slot="navbar">
    <Nav components="{components}" />
  </svelte:fragment>
  <main class="container">
    <QueryClientProvider client="{queryClient}">
      <slot />
    </QueryClientProvider>
  </main>
  <svelte:fragment slot="footer">
    <Footer type="minimal" variant="brand" />
  </svelte:fragment>
</Template>
