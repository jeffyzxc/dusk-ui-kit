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
  import { page } from "$app/stores";
  import Icon from "@dusk-network/icon";
  import Navbar from "@dusk-network/navbar";
  import Menu, { Item } from "@dusk-network/menu";
  // import Footer from "@dusk-network/footer";

  export let components;
</script>

<Navbar variant="brand" id="__app-top-nav" appName="Dusk UI Kit">
  <svelte:fragment slot="apps">
    <Menu orientation="horizontal" name="Portal Navigation">
      <Item href="/" active="{true}">UI Kit Documentation</Item>
    </Menu>
  </svelte:fragment>
  <svelte:fragment slot="navigation">
    <Menu orientation="horizontal" name="App Navigation">
      {#each Object.keys(components) as group}
        <Item href="/components/{group}" active="{$page.path.includes(group)}"
          >{group.toUpperCase()}</Item
        >
      {/each}
    </Menu>
  </svelte:fragment>
  <svelte:fragment slot="links">
    <Menu orientation="horizontal" name="Developer Links">
      <Item href="https://github.com/dusk-network/dusk-ui-kit">
        <Icon name="github" />
      </Item>
      <Item href="https://dusk-network.github.io/dusk-ui-kit/storybook">
        <Icon name="storybook" />
      </Item>
    </Menu>
  </svelte:fragment>
</Navbar>
<main class="container">
  <slot />
</main>
<!-- <Footer type="minimal" variant="brand" social="{content.footer.social_links}" /> -->
