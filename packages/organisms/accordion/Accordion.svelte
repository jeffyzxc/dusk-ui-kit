<script>
  import { setContext, getContext } from "svelte";
  import { writable } from "svelte/store";
  import { contexts } from "@dusk-network/helpers/index.js";
  import "./styles.css";

  export let multiselect = false;

  const items = writable({});

  const context = getContext("DUK:accordion:context");
  
  setContext("DUK:accordion:methods", {
    items,
    add: (item) => {
      items.update((_) => ({ ..._, [item.id]: item.expanded }));
    },
    remove: (item) => {
      items.update((_) => {
        const _items = { ..._ };
        delete _items[item.id];
        return _items;
      });
    },
    toggle: (item) => {
      items.update((_) => {
        if (!multiselect) {
          Object.keys(_).forEach((id) => (_[id] = false));
        }
        return { ..._, [item.id]: item.expanded };
      });
    },
  });
</script>

<dl 
class="{$$props.class || ''} duk-accordion"
class:duk-accordion--card="{context === contexts.CARD.ACCORDION}"
>
  <slot />
</dl>
