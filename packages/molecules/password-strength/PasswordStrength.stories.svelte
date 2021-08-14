<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import PasswordStrength from "@dusk-network/password-strength";
</script>

<Meta
  title="Components/Molecules/Password Strength"
  component="{PasswordStrength}"
  parameters="{{ layout: 'padded' }}"
  argTypes="{{
    password: {
      control: {
        type: 'text',
      },
    },
  }}"
/>

<Template let:args>
  <PasswordStrength password="{args.password}" />
</Template>

<Story name="Standard password strength meter with no context" args="{{ password: '' }}" />
