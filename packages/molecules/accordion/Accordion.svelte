<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { contexts } from "@dusk-network/helpers";
  import "./styles.css";

  export let multiselect = false;
  let className = "";
  export { className as class };

  const items = writable({});
  // let context = getContext("DUK:accordion:context");
  setContext("DUK:list:context", contexts.LIST.ACCORDION);
  setContext("DUK:accordion:context", {
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

<dl class="duk-accordion {className}">
  <slot />
</dl>
