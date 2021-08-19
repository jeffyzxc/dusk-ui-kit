<script>
  // FIXME Remove dependency on Icon (and remove from icon library too).
  import { createEventDispatcher, onMount, getContext } from "svelte";
  import contexts from "@dusk-network/helpers/contexts.js";
  import Icon from "@dusk-network/icon/Icon.svelte";
  import "./styles.css";

  export let options;
  export let selectedIndex = 0;
  export let dropUp = false;

  const dispatch = createEventDispatcher();
  const context = getContext("DUK:drop-down:context");

  let selectedOption = options[selectedIndex];
  let isOpen = false;

  function selectOption(value) {
    selectedOption = value;
    isOpen = false;
    dispatch("select", value);
  }

  onMount(() => {
    selectOption(selectedOption);
  });
</script>

<div
  class="{$$props.class || ''} duk-drop-down"
  class:duk-drop-down--drop-up="{dropUp}"
  class:duk-drop-down--menu="{context === contexts.DROP_DOWN.MENU}"
>
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
          aria-activedescendant="__DUK-drop-down-item-{options.indexOf(selectedOption)}"
          class="duk-drop-down__list"
        >
          {#each options as option, i}
            <li
              id="__DUK-drop-down-item-{i}"
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
