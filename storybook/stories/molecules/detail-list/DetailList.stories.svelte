<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { variants } from "@dusk-network/helpers";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import DetailList, { Item } from "@dusk-network/detail-list";
  import Icon from "@dusk-network/icon";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Molecules/Detail List"
  component="{DetailList}"
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
        options: Object.values(variants.CTALIST),
      },
    },
  })}"
/>

<Story name="Default" args="{{}}" let:args>
  <DetailList {...args}>
    <Item>
      <svelte:fragment slot="term">Something</svelte:fragment>
      <svelte:fragment slot="definition">Defined</svelte:fragment>
    </Item>
    <Item>
      <svelte:fragment slot="term">Something else</svelte:fragment>
      <svelte:fragment slot="definition">Defined too</svelte:fragment>
    </Item>
  </DetailList>
</Story>

<Story name="With Icons" args="{{}}" let:args>
  <DetailList {...args}>
    <Item>
      <svelte:fragment slot="icon">
        <Icon name="check-circle-outline" />
      </svelte:fragment>
      <span slot="term"> Something </span>
      <svelte:fragment slot="definition">Defined</svelte:fragment>
    </Item>
    <Item>
      <svelte:fragment slot="icon">
        <Icon name="check-circle-outline" />
      </svelte:fragment>
      <span slot="term"> Something else </span>
      <svelte:fragment slot="definition">Defined too</svelte:fragment>
    </Item>
  </DetailList>
</Story>
