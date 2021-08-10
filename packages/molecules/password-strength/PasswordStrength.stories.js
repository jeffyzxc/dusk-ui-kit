// import { variants, sizes, icons } from "@dusk-network/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import PasswordStrength from "@dusk-network/password-strength";

export default {
  title: `Components/Molecules/Password Strength`,
  component: PasswordStrength,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    password: {
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args) => ({
  Component: DefaultView,
  props: {
    ...args,
  },
});

export const Basic = Template.bind({});
Basic.args = {
  password: "",
};
