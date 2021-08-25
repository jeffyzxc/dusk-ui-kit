<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { variants } from "@dusk-network/helpers";
  import CtaList, {Item} from "@dusk-network/cta-list";
  import RichText from "@dusk-network/rich-text";

</script>

<Meta
  title="Components/Molecules/Cta List"
  component="{CtaList}"
  parameters="{{ layout: 'padded' }}"
  argTypes="{{
    variant: {
      control: {
        type: 'select',
        options: Object.values(variants.CTALIST),
      },
    },
  }}"
/>

<Template let:args>
 
  <CtaList {...args}>
    <Item>
      <RichText>
        First
      </RichText>
    </Item>
    <Item>
      <RichText>
        Second
      </RichText>
    </Item>
  </CtaList>

</Template>

<Story name="Default" args="{{ type: 1 }}" />
<Story name="Grants homepage example" args="{{ type: 2}}" />
