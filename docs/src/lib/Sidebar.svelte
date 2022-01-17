<script>
  import Card from "@dusk-network/card";
  import Content from "@dusk-network/content";
  import Menu, { Item } from "@dusk-network/menu";
  import Heading from "@dusk-network/heading";
  import Icon from "@dusk-network/icon";
  import { base } from "$app/paths";
  import { page } from "$app/stores";

  export let title;
  export let group;
</script>

<Card class="sticky top-5 mb-10">
  <Heading size="sm"><h2>{title.slice(0, -1)} Packages</h2></Heading>
  <Content>
    <Menu>
      {#each Object.entries(group) as groupe}
        {#if $page.params.group}
          <Item
            active="{$page.url.pathname.includes(groupe[0])}"
            href="{base}/components/{$page.params.group}/{groupe[0]}/{Object.keys(groupe[1])[0]}"
          >
            <Icon
              name="{$page.url.pathname.includes(groupe[0])
                ? 'folder-open-outline'
                : 'folder-outline'}"
            /><span>{groupe[0]}</span>
            <svelte:fragment slot="menu">
              {#if $page.params.package && $page.params.package == groupe[0]}
                <Menu>
                  {#each Object.entries(group[groupe[0]]) as component}
                    <Item
                      active="{$page.url.pathname.includes(component[0])}"
                      href="{base}/components/{$page.params.group}/{groupe[0]}/{component[0]}"
                    >
                      <Icon
                        name="{$page.url.pathname.includes(component[0])
                          ? 'file-eye-outline'
                          : 'file-outline'}"
                      /><span>{component[0]}</span>
                    </Item>
                  {/each}
                </Menu>
              {/if}
            </svelte:fragment>
          </Item>
        {:else}
          <Item active="{$page.url.pathname.includes(groupe[0])}" href="{base}/helpers/{groupe[0]}">
            <Icon
              name="{$page.url.pathname.includes(groupe[0])
                ? 'folder-open-outline'
                : 'folder-outline'}"
            /><span>{groupe[0]}</span>
          </Item>
        {/if}
      {/each}
    </Menu>
  </Content>
</Card>
