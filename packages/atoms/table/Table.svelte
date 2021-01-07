<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, variants, types } from "@dusk-network/helpers";
  import "./styles.css";
  import { Table } from "@dusk-network/elements";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  let className = "";
  export { className as class };
  export let type = types.ATOM.TABLE.BASE;
  export let fixed = false;
  export let striped = true;
  export let variant = variants.ATOM.TABLE.LIGHT;

  function getClassNames(variant, type, fixed, striped) {
    let classNames = "";
    switch (variant) {
      case variants.ATOM.TABLE.LIGHT:
        classNames += " duk-table--light";
        break;
      case variants.ATOM.TABLE.DARK:
        classNames += " duk-table--dark";
        break;
      default:
        classNames += "";
    }
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
    classNames += fixed ? " duk-table--fixed" : "";
    classNames += striped ? " duk-table--striped" : "";

    return classNames;
  }
</script>

<Table
  use="{[forwardEvents, ...use]}"
  class="duk-table {className}
  {getClassNames(variant, type, fixed, striped)}"
  {...exclude($$props, ['use', 'class', 'type', 'variant', 'fixed', 'striped'])}>
  <slot name="head" />
  <slot />
  <slot name="foot" />
</Table>
