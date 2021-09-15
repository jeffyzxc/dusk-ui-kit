<script>
  import "./styles.css";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import contexts from "@dusk-network/helpers/contexts.js";

  export let submitHandler;
  export let schema;
  export let fields;
  export let submitted;

  let formSchema = writable(schema);
  let formFields = writable(fields);
  let formSubmitted = writable(submitted);

  setContext("DUK:form:schema", formSchema);
  setContext("DUK:form:fields", formFields);
  setContext("DUK:form:submitted", formSubmitted);
  setContext("DUK:file-upload:context", contexts.FILE_UPLOAD.FORM);

  $: $formFields = fields;
  $: $formSchema = schema;
  $: $formSubmitted = submitted;
</script>

<form
  class="{$$props.class || ''} duk-form"
  on:submit|preventDefault="{submitHandler}"
  {...$$props}
>
  <slot />
</form>
