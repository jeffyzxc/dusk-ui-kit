<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import PasswordStrength from "@dusk-network/password-strength";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Molecules/Password Strength"
  component="{PasswordStrength}"
  parameters="{{
    layout: 'padded',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/molecules/password-strength/PasswordStrength.test.js'],
  }}"
  argTypes="{meta('molecules/password-strength/PasswordStrength', {})}"
/>

<Story name="Standard password strength meter with no context" args="{{ password: '' }}" let:args>
  <PasswordStrength password="{args.password}" />
</Story>
