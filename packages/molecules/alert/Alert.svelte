<script>
  import { setContext, getContext } from "svelte";
  import { exclude, contexts, variants, elevations, sizes } from "@dusk-network/helpers";
  import Card from "@dusk-network/card/Card.svelte";
  import Title from "@dusk-network/card/Title.svelte";
  import Content from "@dusk-network/card/Content.svelte";
  import Icon from "@dusk-network/icon/Icon.svelte";
  import "./styles.css";

  export let value;
  export let title;
  export let dismissable = true;
  let className = "";
  export { className as class };
  export let variant = variants.MOLECULE.ALERT.WARNING;
  export let size = sizes.MOLECULE.ALERT.BASE;

  let context = getContext("DUK:alert:context");
  setContext("DUK:card:context", contexts.CARD.ALERT);

  function getClassNames(variant, context, title) {
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

    if (!title) classNames += " duk-alert--empty-title";

    return classNames;
  }
</script>

{#if value}
  <Card
    id="__DUK-alert"
    class="duk-alert {className}
    {getClassNames(variant, context, title)}"
    variant="{variant}"
    size="{size}"
    elevation="{elevations.ATOM.CARD.MEDIUM}"
    role="alertdialog"
    aria-labelledby="__DUK-alert-title"
    aria-describedby="__DUK-alert-content"
    {...exclude($$props, ["class", "variant", "title"])}
  >
    <Title id="__DUK-alert-title" class="duk-alert__title">
      {#if title}{title}{/if}
      {#if dismissable}
        <button
          id="__DUK-alert-dismiss"
          aria-controls="__DUK-alert"
          aria-label="Dismiss alert"
          on:click="{() => (value = false)}"
          class="duk-alert__dismiss"
        >
          <Icon size="{size}" name="close-circle-outline" />
        </button>
      {/if}
    </Title>
    <Content id="__DUK-alert-content" class="duk-alert__content">
      <slot />
    </Content>
  </Card>
{/if}
