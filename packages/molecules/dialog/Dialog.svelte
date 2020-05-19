<script>
  import { setContext, getContext, createEventDispatcher } from "svelte";
  // import { scale } from "svelte/transition";
  // import { quadIn } from "svelte/easing";
  import { Scrim, exclude, contexts, variants, elevations } from "@dusk/helpers";
  import Card, { Title, Content } from "@dusk/card";
  import Icon from "@dusk/icon";
  import "./styles.css";

  // const forwardEvents = forwardEventsBuilder(get_current_component(), ['Dialog:opening', 'Dialog:opened', 'Dialog:closing', 'Dialog:closed']);
  const dispatch = createEventDispatcher();

  let className = "";
  export { className as class };
  export let value;
  export let title = "";
  export let variant = variants.MOLECULE.DIALOG.WHITE;
  export let opacity = 0.5;
  export let persistent = false;
  // TODO: Support transitions!
  // export let transitionProps = { duration: 150, easing: quadIn, delay: 150 };

  let context = getContext("DUK:dialog:context");
  setContext("DUK:card:context", contexts.CARD.DIALOG);

  function getClassNames(variant, context, title) {
    let classNames = "";
    switch (variant) {
      case variants.MOLECULE.DIALOG.BRAND:
        classNames += " duk-dialog--brand";
        break;
      case variants.MOLECULE.DIALOG.CTA:
        classNames += " duk-dialog--cta";
        break;
      case variants.MOLECULE.DIALOG.INFO:
        classNames += " duk-dialog--info";
        break;
      case variants.MOLECULE.DIALOG.SUCCESS:
        classNames += " duk-dialog--success";
        break;
      case variants.MOLECULE.DIALOG.WARNING:
        classNames += " duk-dialog--warning";
        break;
      case variants.MOLECULE.DIALOG.DANGER:
        classNames += " duk-dialog--danger";
        break;
      case variants.MOLECULE.DIALOG.LIGHT:
        classNames += " duk-dialog--light";
        break;
      case variants.MOLECULE.DIALOG.DARK:
        classNames += " duk-dialog--dark";
        break;
      default:
        classNames += "";
    }

    if (!title) classNames += " duk-dialog--empty-title";

    return classNames;
  }

  function closeDialog() {
    // console.log('closing dialog')
    value = false;
    dispatch("dialogClose", {
      componentId: "__DUK-dialog",
    });
  }
</script>

{#if value}
  <div class="fixed w-full h-full top-0 left-0 z-30">
    <Scrim {opacity} on:click="{() => !persistent && closeDialog()}" />
    <div class="h-full w-full absolute flex items-center justify-center">
      <Card
        id="__DUK-dialog"
        class="duk-dialog {className}
        {getClassNames(variant, context, title)}"
        {variant}
        elevation="{elevations.ATOM.CARD.LARGE}"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="__DUK-dialog-title"
        aria-describedby="__DUK-dialog-content"
        {...exclude($$props, ['class', 'variant', 'title'])}>
        <Title id="__DUK-dialog-title" class="duk-dialog__title">
          {title}
          <button
            id="__DUK-dialog-dismiss"
            aria-controls="__DUK-dialog"
            aria-label="Dismiss dialog"
            on:click="{closeDialog}"
            class="duk-dialog__dismiss">
            <Icon name="close-circle-outline" />
          </button>
        </Title>
        <Content id="__DUK-dialog-content" class="duk-dialog__content">
          <slot />
        </Content>
      </Card>
    </div>
  </div>
{/if}
