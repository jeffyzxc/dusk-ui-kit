<script>
  import Toggle from "@dusk-network/toggle";

  let value = false;
  const type = "checkbox";
  let variant = "brand";

  function onChange() {
    //Runs on triggered event
  }
  function onClick() {
    //Runs on triggered event
  }
</script>

<Toggle
  type="{type}"
  name="checkbox"
  id="checkbox"
  variant="{variant}"
  value="{value}"
  on:change="{onChange}"
  on:click="{onClick}"
>
  Example {type}
</Toggle>
