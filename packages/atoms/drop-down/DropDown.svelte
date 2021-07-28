<script>
  import { createEventDispatcher } from "svelte";

  export let options;
  export let width;

  const dispatch = createEventDispatcher();

  let selectedOption = options[0];
  let isOpen = false;

  function selectOption(value) {
    selectedOption = value;
    isOpen = false;
    dispatch("selectedOption", value);
  }
</script>

<!-- <div
  class="{$$props.class || ''} duk-progress-bar"
  class:duk-progress-bar--brand="{variant === variants.ATOM.PROGRESS_BAR.BRAND}"
  class:duk-progress-bar--cta="{variant === variants.ATOM.PROGRESS_BAR.CTA}"
  class:duk-progress-bar--info="{variant === variants.ATOM.PROGRESS_BAR.INFO}"
  class:duk-progress-bar--success="{variant === variants.ATOM.PROGRESS_BAR.SUCCESS}"
  class:duk-progress-bar--warning="{variant === variants.ATOM.PROGRESS_BAR.WARNING}"
  class:duk-progress-bar--danger="{variant === variants.ATOM.PROGRESS_BAR.DANGER}"
>
  <div class="duk-progress-bar__progress-container">
    <div style="width:{styles}%" class="duk-progress-bar__progress-step"></div>
    <div class="duk-progress-bar__progress-bar"></div>
  </div>
</div> -->

<div class="{$$props.class || ''} duk-dropdown" style="width:{width}px">
  <div class="duk-drop-down__selected" style="width:calc({width}px - 40px)">
    <p>{selectedOption}</p>
  </div>
  <div class="duk-drop-down__arrow" on:click="{() => (isOpen = !isOpen)}">
    <img src="/images/switcher.png" alt="toggle select" />
  </div>
  <div class="duk-drop-down__list" class:dropdown-open="{isOpen === true}">
    <div class="drop-down__selected" style="width:calc({width}px - 40px)">
      <ul>
        {#each options as option}
          <li on:click="{selectOption(option)}">{option}</li>
        {/each}
      </ul>
    </div>
    <div class="duk-drop-down__arrow--reverse">
      <div on:click="{() => (isOpen = !isOpen)}">
        <img src="/images/switcher.png" alt="toggle select" />
      </div>
    </div>
  </div>
</div>
