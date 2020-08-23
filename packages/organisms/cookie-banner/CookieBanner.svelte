<script>
  import { current_component } from "svelte/internal";
  import GdprBanner from "@beyonk/gdpr-cookie-consent-banner";
  import { forwardEventsBuilder, exclude, useActions, tones } from "@dusk/helpers";
  import "./styles.css";

  let className = "";
  export { className as class };
  export let id;
  export let cookie;
  export let config;
  export let description;
  export let tone = tones.ORGANISM.COOKIE_BANNER.APP;
  export let use = [];

  const forwardEvents = forwardEventsBuilder(current_component);

  function getClassNames(tone) {
    let classNames = "";
    switch (tone) {
      case tones.ORGANISM.COOKIE_BANNER.APP:
        classNames += " duk-cookie-banner--app";
        break;
      case tones.ORGANISM.COOKIE_BANNER.MARKETING:
        classNames += " duk-cookie-banner--marketing";
        break;
      default:
        classNames += "";
    }

    return classNames;
  }
</script>

<aside
  use:useActions="{use}"
  use:forwardEvents
  {id}
  class="duk-cookie-banner {className}
  {getClassNames(tone)}"
  {...exclude($$props, ['use', 'class', 'tone', 'config', 'description', 'cookie'])}>
  <GdprBanner
    cookieName="{cookie}"
    cookieConfig="{config.cookieConfig}"
    choices="{config.choices}"
    {description} />
</aside>
