<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, types } from "@dusk-network/helpers";
  import "./styles.css";
  import Table from "@dusk-network/elements/Table.svelte";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  let className = "";
  export { className as class };
  export let type = types.ATOM.TABLE.BASE;
  export let striped = true;

  function getClassNames(type, striped) {
    let classNames = "";
    switch (type) {
      case types.ATOM.TABLE.BASE:
        classNames += "";
        break;
      case types.ATOM.TABLE.COMPACT:
        classNames += " duk-table--compact";
        break;
      case types.ATOM.TABLE.SPACIOUS:
        classNames += " duk-table--spacious";
        break;
      default:
        classNames += "";
    }
    classNames += striped ? " duk-table--striped" : "";

    return classNames;
  }
</script>

<Table
  use="{[forwardEvents, ...use]}"
  class="duk-table {className}
  {getClassNames(type, striped)}"
  {...exclude($$props, ["use", "class", "type", "striped"])}
>
  <slot name="head" />
  <slot />
  <slot name="foot" />
</Table>
