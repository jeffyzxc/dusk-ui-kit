<script>
  import { createEventDispatcher, setContext } from "svelte";
  import contexts from "@dusk-network/helpers/contexts.js";
  import ProgressBar from "@dusk-network/progress-bar/ProgressBar.svelte";
  import Breadcrumb from "@dusk-network/breadcrumb/Breadcrumb.svelte";
  import Item from "@dusk-network/breadcrumb/Item.svelte";
  import { step } from "./stores/state.js";
  import "./styles.css";

  /**
   * Sets the maximum number of steps in the Wizard.
   */
  export let stepCount = 2;

  const dispatch = createEventDispatcher();
  const next = () => {
    step.increment();
  };
  const previous = () => {
    if ($step > 0) {
      step.decrement();
    }
  };

  setContext("DUK:form:context", contexts.FORM.WIZARD);
  setContext("DUK:progress-bar:context", contexts.PROGRESS_BAR.WIZARD);
  setContext("DUK:breadcrumb:context", contexts.BREADCRUMB.WIZARD);
  setContext("DUK:wizard:state", {
    step,
    next,
    previous,
  });

  const handleExit = () => {
    if ($step === 1) {
      dispatch("exit");
    } else {
      step.decrement();
    }
  };
</script>

<div class="{$$props.class || ''} duk-wizard">
  <Breadcrumb on:exit="{handleExit}">
    <Item>Step {$step} of {stepCount}</Item>
  </Breadcrumb>
  <ProgressBar steps="{stepCount}" step="{$step}" />
  <slot next="{next}" previous="{previous}" />
</div>
