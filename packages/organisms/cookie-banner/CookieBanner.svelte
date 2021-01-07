<script>
  import { current_component } from "svelte/internal";
  import GdprBanner from "@beyonk/gdpr-cookie-consent-banner";
  import { forwardEventsBuilder, exclude, useActions } from "@dusk-network/helpers";
  import "./styles.css";

  let className = "";
  export { className as class };
  export let id;
  export let cookie;
  export let config;
  export let description;
  export let use = [];

  const forwardEvents = forwardEventsBuilder(current_component);
</script>

<aside
  use:useActions="{use}"
  use:forwardEvents
  id="{id}"
  class="duk-cookie-banner {className}"
  {...exclude($$props, ['use', 'class', 'config', 'description', 'cookie'])}>
  <GdprBanner
    cookieName="{cookie}"
    cookieConfig="{config.cookieConfig}"
    choices="{config.choices}"
    description="{description}" />
</aside>
