<script>
  import { getContext, setContext } from "svelte";
  import { current_component } from "svelte/internal";
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
    // orientations,
    types,
    contexts
  } from "@dusk/helpers";
  import "./styles.css";
  import { Table } from "@dusk/elements";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  let className = "";
  export { className as class };
  export let type = types.ATOM.TABLE.BASE;
  export let fixed = false;
  // export let component = type == types.ATOM.LIST.NUMBERED ? Ol : Ul;

  // setContext("DUK:icon:context", contexts.ICON.LIST);

  function getClassNames(type) {
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
      //TODO: Exception handling
    }
    classNames += fixed ? " duk-table--fixed" : "";

    return classNames;
  }
</script>

<Table
  use="{[forwardEvents, ...use]}"
  class="duk-table {className}
  {getClassNames(type)}"
  {...exclude($$props, ['use', 'class'])}>
  <slot name="head" />
  <slot />
  <slot name="foot" />
</Table>
