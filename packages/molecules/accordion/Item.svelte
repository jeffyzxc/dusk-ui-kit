<script>
  import { getContext, setContext, onMount } from "svelte";
  import { sizes, contexts } from "@dusk-network/helpers";
  import Button from "../../atoms/button/Button.svelte";
  import Icon from "../../atoms/icon/Icon.svelte";

  export let id = "__DUK-accordion-item" + Math.random().toString(36);
  export let title = "Title";
  export let expanded = false;
  export let disabled = false;
  export let ref = null;
  const size = sizes.MOLECULE.ACCORDION.LARGE;

  setContext("DUK:button:context", contexts.BUTTON.ACCORDION);

  const ctx = getContext("DUK:accordion:context");
  let unsubscribe = undefined;

  onMount(() => {
    return () => {
      if (ctx) ctx.remove({ id });
      if (unsubscribe) unsubscribe();
    };
  });

  $: buttonId = `button-${id}`;
  $: if (ctx) {
    ctx.add({ id, expanded });
    unsubscribe = ctx.items.subscribe((value) => {
      expanded = value[id];
    });
  }
</script>

<dt
  data-accordion-item
  class="duk-accordion__term"
  on:click="{() => {
    if (ctx) {
      ctx.toggle({ id, expanded: !expanded });
    }
  }}"
>
  <Button
    bind:this="{ref}"
    aria-expanded="{expanded}"
    aria-controls="{id}"
    aria-disabled="{disabled}"
    disabled="{disabled}"
    id="{buttonId}"
    circle="{true}"
    size="{size}"
  >
    <Icon name="{expanded ? 'minus' : 'plus'}" size="{size}" />
  </Button>
  <slot name="title">{title}</slot>
</dt>
<dd
  role="region"
  id="{id}"
  aria-labelledby="{buttonId}"
  hidden="{!expanded}"
  class="duk-accordion__datum"
>
  <slot />
</dd>
