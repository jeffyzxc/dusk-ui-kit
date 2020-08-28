<script>
  import { exclude } from "@dusk/helpers";
  import Logo from "@dusk/logo";
  import LegalMenu from "./menu/LegalMenu.svelte";
  import SocialMediaMenu from "./menu/SocialMediaMenu.svelte";

  export let copyright;
  export let social;
</script>

<div
  class="duk-footer__maximal container "
  {...exclude($$props, ['use', 'class', 'copyright', 'social'])}>
  <Logo href="https://dusk.network" />
  <p class="duk-footer__maximal__copyright">{copyright}</p>
  <LegalMenu orientation="horizontal" separator="dot" class="duk-footer__maximal__legal-menu" />
  <SocialMediaMenu
    orientation="horizontal"
    class="duk-footer__maximal__social-media-menu"
    {social} />
</div>
