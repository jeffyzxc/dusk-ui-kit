<script>
  import GdprBanner from "@beyonk/gdpr-cookie-consent-banner";
  import "./styles.css";

  export let id = "__DUK-cookie-banner" + Math.random().toString(36);
  export let cookie;
  export let config;
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
