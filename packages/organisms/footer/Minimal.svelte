<script>
  import { exclude } from "@dusk/helpers";
  import Logo from "@dusk/logo";
  import LegalMenu from "./menu/LegalMenu.svelte";
  import SocialMediaMenu from "./menu/SocialMediaMenu.svelte";

  export let copyright;
  export let social;
</script>

<div
  class="duk-footer__minimal container "
  {...exclude($$props, ['use', 'class', 'copyright', 'social'])}>
  <Logo href="https://dusk.network" />
  <p class="duk-footer__minimal__copyright">{copyright}</p>
  <LegalMenu orientation="horizontal" separator="dot" class="duk-footer__minimal__legal-menu" />
  <SocialMediaMenu
    orientation="horizontal"
    class="duk-footer__minimal__social-media-menu"
    {social} />
</div>
