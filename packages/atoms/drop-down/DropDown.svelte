<script>
  import { createEventDispatcher } from "svelte";
  import Icon from "@dusk-network/icon";
  import "./styles.css";

  export let options;

  const dispatch = createEventDispatcher();

  let selectedOption = options[0];
  let isOpen = false;

  function selectOption(value) {
    selectedOption = value;
    isOpen = false;
    dispatch("selectedOption", value);
  }
</script>

<div class="{$$props.class || ''} duk-drop-down">
  <div class="duk-drop-down__layout">
    <button type="button" class="duk-drop-down__button" on:click="{() => (isOpen = !isOpen)}">
      <span class="duk-drop-down__selected">
        <span class="duk-drop-down__selected-label">{selectedOption}</span>
      </span>
      <span class="duk-drop-down__button-icon" class:duk-drop-down__button-icon--open="{isOpen}">
        <Icon name="menu-down-outline" />
      </span>
    </button>
    {#if isOpen}
      <div class="duk-drop-down__options">
        <ul
          tabindex="-1"
          role="listbox"
          aria-activedescendant="__DUK-drop-down-item-{options.indexOf(selectedOption + 1)}"
          class="duk-drop-down__list"
        >
          {#each options as option, i}
            <li
              id="__DUK-drop-down-item-{i + 1}"
              role="option"
              class="duk-drop-down__item"
              on:click="{() => selectOption(option)}"
            >
              <div class="duk-drop-down__item-layout">
                <span
                  class="duk-drop-down__item-label"
                  class:duk-drop-down__item-label--selected="{option === selectedOption}"
                  >{option}</span
                >
              </div>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  </div>
</div>
