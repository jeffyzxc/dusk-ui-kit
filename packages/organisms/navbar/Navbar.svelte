<script>
  import { setContext } from "svelte";
  import { current_component } from "svelte/internal";
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
    contexts,
    variants
  } from "@dusk/helpers";
  import "./styles.css";
  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];

  let className = "";
  export { className as class };

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
    document
      .getElementById("__DUK-navbar-menu")
      .classList.toggle("duk-navbar__menu--hidden");
  };
</script>

<div
  use:useActions="{use}"
  use:forwardEvents
  class="duk-navbar {className}
  {getClassNames(variant)}"
  {...exclude($$props, ['use', 'class', 'variant'])}>
  <slot name="logo" />
  <div class="duk-navbar__collapse">
    <button
      id="__DUK-navbar-toggle"
      on:click="{toggleNavbar}"
      class="duk-navbar__collapse__button flex items-center px-3 py-2 border
      rounded">
      <svg
        class="duk-navbar__collapse__button__icon fill-current h-3 w-3"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </button>
  </div>
  <slot />
</div>
