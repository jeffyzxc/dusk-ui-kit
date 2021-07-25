<script>
  import { getContext } from "svelte";
  import { current_component } from "svelte/internal";
  import { exclude, forwardEventsBuilder, types, states, contexts } from "@dusk-network/helpers";
  import Input from "@dusk-network/elements/Input.svelte";
  import Textarea from "@dusk-network/elements/Textarea.svelte";
  import "./styles.css";

  const forwardEvents = forwardEventsBuilder(current_component);

  export const use = [];

  let className = "";
  export { className as class };

  export let type = types.ATOM.TEXT_FIELD.TEXT;
  export let placeholder = "";
  export let state = states.ATOM.TEXT_FIELD.BASE;
  export let component = type === types.ATOM.TEXT_FIELD.MULTI_LINE ? Textarea : Input;
  export let id;
  export let name;

  let context = getContext("DUK:text-field:context") || "";

  function getClassNames(state, context) {
    let classNames = `duk-text-field--${state}`;

    switch (context) {
      case contexts.TEXT_FIELD.CONTROL:
        classNames += " duk-control__input duk-control__input--text-field";
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
  class="duk-text-field {className}
  {getClassNames(state, context)}"
  id="{id || undefined}"
  placeholder="{placeholder || undefined}"
  type="{type}"
  name="{name}"
  {...exclude($$props, ["use", "class", "type", "state", "placeholder", "name"])}
>
  <slot />
</svelte:component>
