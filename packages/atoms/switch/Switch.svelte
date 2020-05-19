<script>
  export let value = false;
  export let label = "";
  // export let variant = "brand";
  export let disabled = false;

  let className = "";
  export { className as class };

  function check() {
    if (disabled) return;
    value = !value;
  }
</script>

<div class="duk-switch {className}" on:click="{check}">
  <input bind:value class="hidden" type="checkbox" on:change />
  <div class="duk-switch__track">
    <div class="w-full h-full absolute"></div>
    <div class="duk-switch__track__thumb" style="{value ? 'left: 1.25rem' : ''}"></div>
  </div>
  <label aria-hidden="true" class="duk-switch__label">{label}</label>
</div>
