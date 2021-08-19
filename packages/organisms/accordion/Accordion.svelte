<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import contexts from "@dusk-network/helpers/contexts.js";
  import "./styles.css";

  export let multiselect = false;

  const items = writable({});

  // let context = getContext("DUK:accordion:context");
  setContext("DUK:list:context", contexts.LIST.ACCORDION);
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

<dl class="{$$props.class || ''} duk-accordion">
  <slot />
</dl>
