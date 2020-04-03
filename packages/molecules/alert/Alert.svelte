<script>
  import { setContext, getContext } from "svelte";
  import { current_component } from "svelte/internal";
  import {
    exclude,
    contexts,
    variants
  } from "@dusk/helpers";
  import Card, { Title, Content } from "@dusk/card";
  import Icon from "@dusk/icon";
  import "./styles.css";

  export let title = "Alert!";
  let className = "";
  export { className as class };
  export let variant = variants.MOLECULE.ALERT.WARNING;

  let context = getContext("DUK:alert:context");
  setContext("DUK:card:context", contexts.CARD.ALERT);

  function getClassNames(variant, context) {
    let classNames = "";
    switch (variant) {
      case variants.MOLECULE.ALERT.BRAND:
        classNames += " duk-alert--brand";
        break;
      case variants.MOLECULE.ALERT.CTA:
        classNames += " duk-alert--cta";
        break;
      case variants.MOLECULE.ALERT.INFO:
        classNames += " duk-alert--info";
        break;
      case variants.MOLECULE.ALERT.SUCCESS:
        classNames += " duk-alert--success";
        break;
      case variants.MOLECULE.ALERT.WARNING:
        classNames += " duk-alert--warning";
        break;
      case variants.MOLECULE.ALERT.DANGER:
        classNames += " duk-alert--danger";
        break;
      case variants.MOLECULE.ALERT.LIGHT:
        classNames += " duk-alert--light";
        break;
      case variants.MOLECULE.ALERT.DARK:
        classNames += " duk-alert--dark";
        break;
      default:
        classNames += "";
    }

    return classNames;
  }

  const dismiss = () => {
    document.getElementById("__DUK-alert").remove();
  };
</script>

<Card
  id="__DUK-alert"
  class="duk-alert {className}
  {getClassNames(variant, context)}"
  {variant}
  role="alertdialog" aria-labelledby="__DUK-alert-title" aria-describedby="__DUK-alert-content"
  {...exclude($$props, ['class', 'variant', 'title'])}>
  <Title id="__DUK-alert-title" class="duk-alert__title">
    {title}
    <button
      id="__DUK-alert-dismiss"
      aria-controls="__DUK-alert"
      aria-label="Dismiss alert"
      on:click="{dismiss}"
      class="duk-alert__dismiss">
      <Icon name="menu-burger-close" />
    </button>
  </Title>
  <Content id="__DUK-alert-content" class="duk-alert__content">
    <slot />
  </Content>
</Card>
