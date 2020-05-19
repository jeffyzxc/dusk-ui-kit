<script>
  import { setContext } from "svelte";
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, useActions, contexts, variants } from "@dusk/helpers";
  import Icon from "@dusk/icon";
  import "./styles.css";
  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  export let title = null;

  let className = "";
  export { className as class };

  let expanded = false;

  export let variant = variants.ORGANISM.NAVBAR.BRAND;
  setContext("DUK:menu:context", contexts.MENU.NAVBAR);
  setContext("DUK:logo:context", contexts.LOGO.NAVBAR);

  function getClassNames(variant) {
    let classNames = "";
    switch (variant) {
      case variants.ORGANISM.NAVBAR.BRAND:
        classNames += " duk-navbar--brand";
        break;
      case variants.ORGANISM.NAVBAR.CTA:
        classNames += " duk-navbar--cta";
        break;
      case variants.ORGANISM.NAVBAR.INFO:
        classNames += " duk-navbar--info";
        break;
      case variants.ORGANISM.NAVBAR.SUCCESS:
        classNames += " duk-navbar--success";
        break;
      case variants.ORGANISM.NAVBAR.WARNING:
        classNames += " duk-navbar--warning";
        break;
      case variants.ORGANISM.NAVBAR.DANGER:
        classNames += " duk-navbar--danger";
        break;
      case variants.ORGANISM.NAVBAR.LIGHT:
        classNames += " duk-navbar--light";
        break;
      case variants.ORGANISM.NAVBAR.DARK:
        classNames += " duk-navbar--dark";
        break;
      case variants.ORGANISM.NAVBAR.BLACK:
        classNames += " duk-navbar--black";
        break;
      case variants.ORGANISM.NAVBAR.WHITE:
        classNames += " duk-navbar--white";
        break;
      default:
        classNames += "";
    }

    return classNames;
  }

  const toggleNavbar = () => {
    document.getElementById("__DUK-navbar-menu").classList.toggle("duk-navbar__menu--hidden");

    expanded = !document
      .getElementById("__DUK-navbar-menu")
      .classList.contains("duk-navbar__menu--hidden");
  };
</script>

<nav
  use:useActions="{use}"
  use:forwardEvents
  class="duk-navbar {className}
  {getClassNames(variant)}"
  {...exclude($$props, ['use', 'class', 'variant', 'title'])}>
  <div class="duk-navbar__title">
    <slot name="logo" />
    {#if title}
      <h1 class="duk-navbar__title__heading">{title}</h1>
    {/if}
  </div>
  <div id="__DUK-navbar-content" class="duk-navbar__collapse">
    <button
      id="__DUK-navbar-toggle"
      aria-controls="__DUK-navbar-content"
      aria-expanded="{expanded}"
      aria-label="Toggle navigation"
      on:click="{toggleNavbar}"
      class="duk-navbar__collapse__button">
      {#if !expanded}
        <Icon name="menu-burger" />
      {:else}
        <Icon name="menu-burger-close" />
      {/if}
    </button>
  </div>
  <slot />
</nav>
