<script>
  import { setContext } from "svelte";
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, useActions, contexts, variants } from "@dusk/helpers";
  import Menu from "@dusk/menu";
  import List, { Item } from "@dusk/list";
  import Icon from "@dusk/icon";
  import "./styles.css";
  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  export let title = null;

  let className = "";
  export { className as class };

  let expanded = false;

  export let id;
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
    // console.log(id);
    // console.log(document.getElementById(`#${id}`));
    const navbarElement = document.querySelector(`#${id}`);
    navbarElement.classList.toggle("duk-navbar--hidden");

    expanded = !navbarElement.classList.contains("duk-navbar--hidden");
  };
</script>

<nav
  use:useActions="{use}"
  use:forwardEvents
  class="duk-navbar {className}
  {getClassNames(variant)}"
  {...exclude($$props, ['use', 'class', 'variant', 'title'])}>
  <div class="duk-navbar__wrapper duk-navbar__wrapper--primary">
    <div class="duk-navbar__brand">
      <slot name="logo" />
      {#if title}
        <h1 class="duk-navbar__brand__heading">{title}</h1>
      {/if}
      <div class="duk-navbar__navigation duk-navbar__navigation--primary">
        <slot name="networks" />
        <slot name="apps" />
      </div>
    </div>
    <div class="duk-navbar__navigation duk-navbar__navigation--tertiary">
      <slot name="links" />
    </div>
    <div id="{id}-content" class="duk-navbar__collapse">
      <button
        id="__DUK-navbar-toggle"
        aria-controls="{id}-content"
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
  </div>
  <div class="duk-navbar__wrapper duk-navbar__wrapper--secondary">
    <div class="duk-navbar__navigation duk-navbar__navigation--secondary">
      <slot name="navigation" />
    </div>
  </div>
</nav>
