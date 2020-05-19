<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, useActions, types } from "@dusk/helpers";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  export let type = "text";
  export let id = "";
  export let placeholder = "";
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
</script>

<input
  use:useActions="{use}"
  use:forwardEvents
  class="{className}
  {getClassNames(type)}"
  {type}
  {id}
  {placeholder}
  {...exclude($$props, ['use', 'class'])} />
