<script>
  import Card, { Content, Title } from "@dusk-network/card";
  import Menu, { Item } from "@dusk-network/menu";
  import Icon from "@dusk-network/icon";
  import { base } from "$app/paths";
  import { page } from "$app/stores";

  export let title;
  export let group;
</script>

<Card class="sticky top-5">
  <Title><h2>{title.slice(0, -1)} Packages</h2></Title>
  <Content>
    <Menu>
      {#each Object.entries(group) as groupe}
        <Item
          active="{$page.path.includes(groupe[0])}"
          href="{base}/components/{$page.params.group}/{groupe[0]}/{Object.keys(groupe[1])[0]}"
        >
          <Icon
            name="{$page.path.includes(groupe[0]) ? 'folder-open-outline' : 'folder-outline'}"
          /><span>{groupe[0]}</span>
          <svelte:fragment slot="menu">
            {#if $page.params.package && $page.params.package == groupe[0]}
              <Menu>
                {#each Object.entries(group[groupe[0]]) as component}
                  <Item href="{base}/components/{$page.params.group}/{groupe[0]}/{component[0]}">
                    {component[0]}
                  </Item>
                {/each}
              </Menu>
            {/if}
          </svelte:fragment>
        </Item>
      {/each}
    </Menu>
  </Content>
</Card>
