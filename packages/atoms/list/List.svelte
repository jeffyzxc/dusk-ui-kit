<script>
  import { getContext } from "svelte";
  import { current_component } from "svelte/internal";
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
    orientations,
    types,
    contexts
  } from "@dusk/ui-kit-helpers";
  import { Ol, Ul } from "@dusk/ui-kit-elements";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  let className = "";
  export { className as class };
  export let type = types.ATOM.LIST.NONE;
  export let component = type == types.ATOM.LIST.NUMBERED ? Ol : Ul;
  let context = getContext("DUK:list:context");

  function getClassNames(type, context) {
    let classNames = "";
    switch (type) {
      case types.ATOM.LIST.NONE:
        classNames += "";
        break;
      case types.ATOM.LIST.NUMBERED:
        classNames += " duk-list--numbered";
        break;
      case types.ATOM.LIST.BULLETED:
        classNames += " duk-list--bulleted";
        break;
      default:
      //TODO: Exception handling
    }

    switch (context) {
      case contexts.LIST.MENU:
        classNames += " duk-list--menu";
        break;
      default:
      //TODO: Exception handling
    }

    return classNames;
  }
</script>

<svelte:component
  this="{component}"
  use="{[forwardEvents, ...use]}"
  class="duk-list {className}
  {getClassNames(type, context)}"
  {...exclude($$props, ['use', 'class', 'orientation', 'type'])}>
  <slot />
</svelte:component>
