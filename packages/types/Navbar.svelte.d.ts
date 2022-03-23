/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface NavbarProps {
  /**
   * Sets the title of application.
   * @default ""
   */
  title?: string;

  /**
   * Used to display an app menu unless `$$slots.apps` is passed.
   * @default []
   */
  apps?: [];

  /**
   * Used to display a menu with links unless `$$slots.links` is passed.
   * @default []
   */
  links?: [];

  /**
   * Sets the application name.
   * @default ""
   */
  appName?: string;

  /**
   * Sets the configuration object used by the A11yMenu cookie.
   * Contains the cookie options as defined here: https://github.com/js-cookie/js-cookie#cookie-attributes
   * @default { expires: 365, }
   */
  cookieConfig?: { expires: 365 };

  /**
   * Sets the `id` of the Navbar if set, otherwise the ID is generated.
   * @default "__DUK-navbar" + Math.random().toString(36)
   */
  id?: string;
}

export default class Navbar extends SvelteComponentTyped<
  NavbarProps,
  { settings: WindowEventMap["settings"] },
  { a11y: {}; apps: {}; links: {}; logo: {}; navigation: {}; networks: {} }
> {}
