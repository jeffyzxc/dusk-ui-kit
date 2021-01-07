import { withKnobs, object, text, button } from "@storybook/addon-knobs";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
import "@dusk-network/styles/tailwind.css";

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
const COOKIE_NAME = "_dusk-SB-CB-DEMO";

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

export default {
  title: "Components/Organisms/CookieBanner",
  parameters: {
    notes: readme,
    layout: "centered",
  },
  decorators: [withKnobs],
};

export const Default = () => ({
  Component: DefaultView,
  props: {
    deleteCookie: button("Delete Cookie", () => {
      deleteCookie(COOKIE_NAME);
    }),
    description: text("GDPR Description", defaultDescription),
    config: object("GDPR Config", defaultConfig),
    cookie: COOKIE_NAME,
  },
});
