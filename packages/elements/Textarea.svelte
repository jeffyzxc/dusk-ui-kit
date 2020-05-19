<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, useActions } from "@dusk/helpers";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  export let placeholder = "";
  let className = "";
  export { className as class };
</script>

<textarea
  use:useActions="{use}"
  use:forwardEvents
  class="{className} duk-text-field--textarea"
  {placeholder}
  {...exclude($$props, ['use', 'class'])}></textarea>
