<script>
  import { setContext } from "svelte";
  import { contexts } from "@dusk-network/helpers";
  import Icon from "@dusk-network/icon/Icon.svelte";
  import Logo from "@dusk-network/logo/Logo.svelte";
  import AppsMenu from "./menu/AppsMenu.svelte";
  import LinksMenu from "./menu/LinksMenu.svelte";
  import A11yMenu from "./menu/A11yMenu.svelte";
  import "./styles.css";

  export let title;
  export let apps;
  export let links;
  export let appName;
  export let id;
  export let darkMode = false;

  darkMode = !darkMode;

  let expanded = false;

  setContext("DUK:menu:context", contexts.MENU.NAVBAR);
  setContext("DUK:logo:context", contexts.LOGO.NAVBAR);

  const toggleNavbar = () => {
    const navbarElement = document.querySelector(`#${id}`);
    navbarElement.classList.toggle("duk-navbar--hidden");

    expanded = !navbarElement.classList.contains("duk-navbar--hidden");
  };
</script>

<nav class="{$$props.class || ''} duk-navbar duk-navbar--hidden" id="{id}">
  <div class="duk-navbar__wrapper duk-navbar__wrapper--primary">
    <div class="duk-navbar__brand">
      {#if $$slots.logo}
        <slot name="logo" />
      {:else}
        <Logo class="duk-navbar__logo" href="https://dusk.network" />
      {/if}
      {#if title}
        <h1 class="duk-navbar__heading">{title}</h1>
      {/if}
      <div class="duk-navbar__navigation duk-navbar__navigation--primary">
        {#if $$slots.networks}
          <slot name="networks" />
        {/if}
        {#if $$slots.apps}
          <slot name="apps" />
        {:else}
          <AppsMenu apps="{apps}" appName="{appName}" />
        {/if}
      </div>
    </div>
    <div class="duk-navbar__navigation duk-navbar__navigation--tertiary">
      {#if $$slots.links}
        <slot name="links" />
      {:else}
        <LinksMenu links="{links}" />
      {/if}
      <A11yMenu darkMode="{darkMode}" />
    </div>
    <div id="{id}-content" class="duk-navbar__collapse">
      <button
        id="__DUK-navbar-toggle"
        aria-controls="{id}-content"
        aria-expanded="{expanded}"
        aria-label="Toggle navigation"
        on:click="{toggleNavbar}"
      >
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
