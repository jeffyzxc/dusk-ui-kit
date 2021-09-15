<script>
  import { getContext, setContext } from "svelte";
  import states from "@dusk-network/helpers/states.js";
  import contexts from "@dusk-network/helpers/contexts.js";
  import types from "@dusk-network/helpers/types.js";
  import widths from "@dusk-network/helpers/widths.js";
  import Message from "./Message.svelte";
  import "./styles.css";

  export let type = types.CONTROL.STACKED;
  export let state = states.CONTROL.DEFAULT;
  export let id = "__DUK-control" + Math.random().toString(36);
  export let label = "";
  export let message = "";
  export let width = widths.CONTROL.HALF;
  export let name;
  export let group = false;

  setContext("DUK:icon:context", contexts.ICON.CONTROL);
  setContext("DUK:text-field:context", contexts.TEXT_FIELD.CONTROL);
  setContext("DUK:toggle:context", contexts.TOGGLE.CONTROL);
  setContext("DUK:drop-down:context", contexts.DROP_DOWN.CONTROL);
  setContext("DUK:date-picker:context", contexts.DATE_PICKER.CONTROL);
  setContext("DUK:password-strength:context", contexts.PASSWORD_STRENGTH.CONTROL);
  setContext("DUK:button:context", contexts.BUTTON.CONTROL);
  setContext("DUK:file-upload:context", contexts.FILE_UPLOAD.CONTROL);
  
  const context = getContext("DUK:control:context");
  const schema = getContext("DUK:form:schema");
  const fields = getContext("DUK:form:fields");
  const submitted = getContext("DUK:form:submitted");

  $: $fields && validate();
  $: $submitted && validate();

  const validate = async () => {
    if ($submitted && name) {
      state = states.CONTROL.SUCCESS;
      await $schema.validateAt(name, $fields).catch(() => {
        state = states.CONTROL.DANGER;
      });
    }
  };
</script>

<div
  class="{$$props.class || ''} duk-control"
  class:duk-control--stacked="{type === types.CONTROL.STACKED}"
  class:duk-control--inline-fixed="{type === types.CONTROL.INLINE_FIXED}"
  class:duk-control--inline-flex="{type === types.CONTROL.INLINE_FLEX}"
  class:duk-control--success="{state === states.CONTROL.SUCCESS}"
  class:duk-control--warning="{state === states.CONTROL.WARNING}"
  class:duk-control--danger="{state === states.CONTROL.DANGER}"
  class:duk-control--full="{width === widths.CONTROL.FULL}"
  class:duk-control--half="{width === widths.CONTROL.HALF}"
  class:duk-control--quarter="{width === widths.CONTROL.QUARTER}"
  class:duk-control--group="{group}"
>
  <div class="duk-control__wrapper">
    {#if group && label}
      <h4 id="{id}-label" class="duk-control__label">
        {label}
      </h4>
    {:else if label}
      <label for="{id}" class="duk-control__label">
        {label}
      </label>
    {/if}
    <slot id="{id}" state="{state}" />
  </div>
  <Message
    id="{id}"
    message="{message}"
    schema="{schema}"
    fields="{fields}"
    submitted="{submitted}"
    name="{name}"
  />
</div>
