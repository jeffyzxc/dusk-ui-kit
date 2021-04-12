<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, useActions, types } from "@dusk-network/helpers";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  export let type = "text";
  export let id = "";
  export let placeholder = "";
  export let value = undefined;
  let className = "";
  export { className as class };

  function getClassNames(type) {
    let classNames = "";

    switch (type) {
      case types.ATOM.TEXT_FIELD.MULTI_LINE:
        classNames += " duk-text-field--textarea";
        break;
      case types.ATOM.TEXT_FIELD.TEXT:
        classNames += " duk-text-field--text";
        break;
      case types.ATOM.TEXT_FIELD.PASSWORD:
        classNames += " duk-text-field--text--password";
        break;
      case types.ATOM.RADIO:
        classNames += " duk-radio";
        break;
      default:
        classNames += "";
    }

    return classNames;
  }

  const handleInput = (e) => {
    console.log("value is", e.target.value);
    if (type.match(/^(number|range)$/)) {
      console.log("number type needed for", value);
      value = +e.target.value;
      // } else if (type.match(/^(radio|checkbox)$/)) {
      //   console.log("bool type needed for", value);
      //   value = !Boolean(e.target.value);
    } else {
      value = e.target.value;
    }
  };
</script>

{#if type.match(/^(checkbox)$/)}
  <input
    use:useActions="{use}"
    use:forwardEvents
    class="{className}
  {getClassNames(type)}"
    type="checkbox"
    id="{id}"
    placeholder="{placeholder}"
    bind:checked="{value}"
    {...exclude($$props, ['use', 'class'])} />
{:else}
  <input
    use:useActions="{use}"
    use:forwardEvents
    class="{className}
  {getClassNames(type)}"
    type="{type}"
    id="{id}"
    placeholder="{placeholder}"
    on:input="{handleInput}"
    {...exclude($$props, ['use', 'class'])} />
{/if}
