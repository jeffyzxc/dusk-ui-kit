/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CookieBannerProps {
  /**
   * Sets the `id` of the Cookie Banner if set, otherwise the ID is generated.
   * @default "__DUK-cookie-banner" + Math.random().toString(36)
   */
  id?: string;

  /**
   * Sets the cookie name for the Cookie Banner.
   * @default "DUSK-GDPR"
   */
  cookieName?: string;

  /**
   * Sets the configuration object used by the cookie.
   * Contains the cookie options as defined here: https://github.com/js-cookie/js-cookie#cookie-attributes
   * @default { expires: 365, }
   */
  cookieConfig?: { expires: 365 };

  /**
   * Sets the accept Button text.
   * @default undefined
   */
  acceptLabel?: undefined;

  /**
   * Sets the settings Button text.
   * @default undefined
   */
  settingsLabel?: undefined;

  /**
   * Sets the visibility of the banner
   * @default false
   */
  showBanner?: boolean;

  /**
   * Sets the visibility of the settings modal
   * @default false
   */
  showSettings?: boolean;
}

export default class CookieBanner extends SvelteComponentTyped<
  CookieBannerProps,
  {
    closeSettings: CustomEvent<any>;
    openSettings: CustomEvent<any>;
    tracking: CustomEvent<any>;
    analytics: CustomEvent<any>;
    marketing: CustomEvent<any>;
  },
  { default: {} }
> {}
