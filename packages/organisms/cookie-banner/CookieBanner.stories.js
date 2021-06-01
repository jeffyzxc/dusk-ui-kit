const defaultConfig = {
  cookieConfig: {
    domain: window.location.hostname,
    path: "/",
  },
  choices: {
    necessary: {
      label: "Required cookies",
      description: "These can not be turned off as they are used to control all the other cookies.",
      value: true,
    },
    marketing: false,
    tracking: false,
    analytics: {
      label: "Analytics cookies",
      description:
        "Used to control Google Analytics, a 3rd party tool offered by Google to track user behavior.",
      value: true,
    },
  },
};
const defaultDescription =
  "We use cookies to to analyze our traffic. We also share information about your use of our site with our analytics partners who may combine it with other information that you’ve provided to them or that they have collected from your use of their services.";

function deleteCookie(name, path, domain) {
  if (getCookie(name)) {
    document.cookie =
      name +
      "=" +
      (path ? ";path=" + path : "") +
      (domain ? ";domain=" + domain : "") +
      ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
  }
}

function getCookie(name) {
  return document.cookie.split(";").some((c) => {
    return c.trim().startsWith(name + "=");
  });
}

const COOKIE_NAME = "_dusk-SB-CB-DEMO";

import Default from "./storybook-views/Default.svelte";
import CookieBanner from "@dusk-network/cookie-banner";

export default {
  title: `Components/Organisms/Cookie Banner`,
  component: CookieBanner,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

const Template = (args) => ({
  Component: Default,
  props: {
    ...args,
  },
});

export const Basic = Template.bind({});
Basic.args = {
  deleteCookie: deleteCookie(COOKIE_NAME),
  description: defaultDescription,
  config: defaultConfig,
  cookie: COOKIE_NAME,
};
