<script>
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import Icon from "@dusk-network/icon";
  import Navbar from "@dusk-network/navbar";
  import Menu, { Item } from "@dusk-network/menu";

  export let components;
</script>

<Navbar variant="brand" id="__app-top-nav" appName="Dusk UI Kit" on:settings>
  <svelte:fragment slot="apps">
    <Menu orientation="horizontal" name="Portal Navigation">
      <Item href="{base}/" active="{true}">UI Kit Documentation</Item>
    </Menu>
  </svelte:fragment>
  <svelte:fragment slot="navigation">
    <Menu orientation="horizontal" name="App Navigation">
      {#each Object.keys(components) as group}
        <Item href="{base}/components/{group}" active="{$page.url.pathname.includes(group)}">
          {group.toUpperCase()}
        </Item>
      {/each}
      <Item href="{base}/helpers" active="{$page.url.pathname.includes('helpers')}">HELPERS</Item>
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
