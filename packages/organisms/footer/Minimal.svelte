<script>
  import { exclude } from "@dusk-network/helpers";
  import Logo from "@dusk-network/logo/Logo.svelte";
  import LegalMenu from "./menu/LegalMenu.svelte";
  import SocialMediaMenu from "./menu/SocialMediaMenu.svelte";

  export let copyright;
  export let social;
</script>

<div
  class="duk-footer__minimal container "
  {...exclude($$props, ["use", "class", "copyright", "social"])}
>
  <Logo class="duk-footer__logo" href="https://dusk.network" />
  <p class="duk-footer__copyright">{copyright}</p>
  <LegalMenu orientation="horizontal" separator="dot" class="duk-footer__legal-menu" />
  {#if social}
    <SocialMediaMenu
      orientation="horizontal"
      class="duk-footer__social-media-menu"
      social="{social}"
    />
  {/if}
</div>
