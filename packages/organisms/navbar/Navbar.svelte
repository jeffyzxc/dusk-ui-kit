<script>
  import { setContext } from "svelte";
  import contexts from "@dusk-network/helpers/contexts.js";
  import Icon from "@dusk-network/icon";
  import Logo from "@dusk-network/logo";
  import AppsMenu from "./menu/AppsMenu.svelte";
  import LinksMenu from "./menu/LinksMenu.svelte";
  import A11yMenu from "./menu/A11yMenu.svelte";
  import "./styles.css";

  /**
   * Sets the title of application.
   */
  export let title = "";

  /**
   * Used to display an app menu unless `$$slots.apps` is passed.
   */
  export let apps = [];

  /**
   * Used to display a menu with links unless `$$slots.links` is passed.
   */
  export let links = [];

  /**
   * Sets the application name.
   */
  export let appName = "";

  /**
   * Sets the configuration object used by the A11yMenu cookie.
   * Contains the cookie options as defined here: https://github.com/js-cookie/js-cookie#cookie-attributes
   */
  export let cookieConfig = {
    expires: 365,
  };

  /**
   * Sets the `id` of the Navbar if set, otherwise the ID is generated.
   * @type {string}
   */
  export let id = "__DUK-navbar" + Math.random().toString(36);

  let expanded = false;

  setContext("DUK:menu:context", contexts.MENU.NAVBAR);
  setContext("DUK:logo:context", contexts.LOGO.NAVBAR);

  const toggleNavbar = () => {
    const navbarElement = document.querySelector(`#${id}`);
    navbarElement.classList.toggle("duk-navbar--hidden");
    expanded = !expanded;
  };
</script>

<svelte:window
  on:sveltekit:navigation-start="{() => {
    if (expanded) {
      toggleNavbar();
    }
  }}"
/>

<nav class="{$$props.class || ''} duk-navbar duk-navbar--hidden" id="{id}">
  <div class="duk-navbar__wrapper duk-navbar__wrapper--primary">
    <div class="duk-navbar__brand">
      {#if $$slots.logo}
        <slot name="logo" />
      {:else}
        <Logo href="https://dusk.network/" />
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
    </div>
    <div id="{id}-content" class="duk-navbar__collapse">
      <button
        id="{id}-navbar-toggle"
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
    {#if $$slots.a11y}
      <slot name="a11y" />
    {:else}
      <A11yMenu on:settings cookieConfig="{cookieConfig}" />
    {/if}
  </div>
</nav>
