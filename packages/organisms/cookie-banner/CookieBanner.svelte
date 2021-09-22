<script>
  import GdprBanner from "@beyonk/gdpr-cookie-consent-banner";
  import "./styles.css";

  /**
   * Sets the `id` of the Cookie Banner if set, otherwise the ID is generated.
   */
  export let id = "__DUK-cookie-banner" + Math.random().toString(36);

  /**
   * Sets the cookie name for the Cookie Banner.
   */
  export let cookie;

  /**
   * Sets the configuration object used by the Cookie Banner. 
   * Which contains the cookie options and their description and the domain and path where the Cookie Banner resides.
   */
  export let config;

  /**
   * Sets the desrciption text of the Cookie Banner.
   */
  export let description;
</script>

<aside id="{id}" class="{$$props.class || ''} duk-cookie-banner">
  <GdprBanner
    cookieName="{cookie}"
    cookieConfig="{config.cookieConfig}"
    choices="{config.choices}"
    description="{description}"
  />
</aside>
