<script>
  import { getContext, setContext } from "svelte";
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, types, contexts } from "@dusk-network/helpers";
  import "./styles.css";
  import Ol from "@dusk-network/elements/Ol.svelte";
  import Ul from "@dusk-network/elements/Ul.svelte";
  import Dl from "@dusk-network/elements/Dl.svelte";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  let className = "";
  let component;
  export { className as class };
  export let type = types.LIST.NONE;

  switch (type) {
    case types.LIST.NONE:
      component = Ul;
      break;
    case types.LIST.NUMBERED:
      component = Ol;
      break;
    case types.LIST.DEFINITION:
      component = Dl;
      break;
    default:
      component = Ul;
  }

  let context = getContext("DUK:list:context");
  setContext("DUK:icon:context", contexts.ICON.LIST);

  function getClassNames(type, context) {
    let classNames = "";
    switch (type) {
      case types.LIST.NONE:
        classNames += "";
        break;
      case types.LIST.NUMBERED:
        classNames += " duk-list--numbered";
        break;
      case types.LIST.BULLETED:
        classNames += " duk-list--bulleted";
        break;
      case types.LIST.DEFINITION:
        classNames += " duk-list--definition";
        break;
      default:
        classNames += "";
    }
    switch (context) {
      case contexts.LIST.MENU:
        classNames += " duk-list--menu";
        break;
      case contexts.LIST.ACCORDION:
        classNames += " duk-list--accordion";
        break;
      default:
        classNames += "";
    }

    return classNames;
  }
</script>

<svelte:component
  this="{component}"
  use="{[forwardEvents, ...use]}"
  class="{className} duk-list
  {getClassNames(type, context)}"
  {...exclude($$props, ["use", "class", "type"])}
>
  <slot />
</svelte:component>
