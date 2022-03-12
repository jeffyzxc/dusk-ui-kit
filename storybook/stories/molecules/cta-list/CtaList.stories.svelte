<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { variants } from "@dusk-network/helpers";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import CtaList, { Item } from "@dusk-network/cta-list";
  import RichText from "@dusk-network/rich-text";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Molecules/Cta List"
  component="{CtaList}"
  parameters="{{
    layout: 'padded',
    docs: {
      source: {
        type: 'code',
      },
    },
    // jest: ['packages/molecules/cta-list/CtaList.test.js'],
  }}"
  argTypes="{meta('molecules/cta-list/CtaList', {
    variant: {
      control: {
        type: 'select',
        options: Object.values(variants.CTA_LIST),
      },
    },
  })}"
/>

<Story name="Default" args="{{ type: 1 }}" let:args>
  <CtaList {...args}>
    <Item>
      <RichText>First</RichText>
    </Item>
    <Item>
      <RichText>Second</RichText>
    </Item>
  </CtaList>
</Story>
<Story name="Grants homepage example" args="{{ type: 2 }}" let:args>
  <CtaList {...args}>
    <Item>
      <RichText>First</RichText>
    </Item>
    <Item>
      <RichText>Second</RichText>
    </Item>
  </CtaList>
</Story>
