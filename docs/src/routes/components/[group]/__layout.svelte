<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, stuff }) {
    const group = Object.keys(stuff.components)
      .filter((key) => key === page.params.group)
      .reduce((obj, key) => {
        obj = stuff.components[key];
        return obj;
      }, {});

    return {
      props: { group },
    };
  }
</script>

<script>
  import Menu, { Item } from "@dusk-network/menu";
  import Card, { Content, Title } from "@dusk-network/card";
  import { page } from "$app/stores";
  export let group;

  $: groupTitle = $page.params.group;
  $: navTitle = groupTitle.charAt(0).toUpperCase() + groupTitle.slice(1);
</script>

<div class="flex flex-row flex-wrap py-4">
  <aside class="w-full lg:w-1/4 px-2 lg:pr-20">
    <Card class="sticky top-0">
      <Title><h2>{navTitle.slice(0, -1)} Packages</h2></Title>
      <Content>
        <Menu>
          {#each Object.entries(group) as groupe}
            <Item href="/components/{$page.params.group}/{groupe[0]}/{Object.keys(groupe[1])[0]}">
              {groupe[0]}
              <svelte:fragment slot="menu">
                {#if $page.params.package && $page.params.package == groupe[0]}
                  <Menu>
                    {#each Object.entries(group[groupe[0]]) as component}
                      <Item href="/components/{$page.params.group}/{groupe[0]}/{component[0]}">
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
  </aside>
  <div role="main" class="w-full lg:w-3/4 pt-1 px-2">
    <slot group="{group}" />
  </div>
</div>
