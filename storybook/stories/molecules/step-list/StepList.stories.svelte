<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { variants } from "@dusk-network/helpers";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import StepList, { Item } from "@dusk-network/step-list";
  import RichText from "@dusk-network/rich-text";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Molecules/Step List"
  component="{StepList}"
  parameters="{{
    layout: 'padded',
    docs: {
      source: {
        type: 'code',
      },
    },
    // jest: ['packages/molecules/step-list/StepList.test.js'],
  }}"
  argTypes="{meta('molecules/step-list/StepList', {
    variant: {
      control: {
        type: 'select',
        options: Object.values(variants.CTALIST),
      },
    },
  })}"
/>

<Story name="Default" args="{{}}" let:args>
  <StepList>
    <Item iconName="eye-outline">
      <svelte:fragment slot="title">
        <RichText>Title</RichText>
      </svelte:fragment>
      <svelte:fragment slot="content">
        <RichText size="sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas risus nunc, auctor sit
          amet odio sed, ultrices consectetur orci. Donec id dolor semper, porta tellus sit amet,
          eleifend nisl.
        </RichText>
      </svelte:fragment>
    </Item>
    <Item iconName="brightness-5">
      <svelte:fragment slot="title">
        <RichText>Title</RichText>
      </svelte:fragment>
      <svelte:fragment slot="content">
        <RichText size="sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas risus nunc, auctor sit
          amet odio sed, ultrices consectetur orci. Donec id dolor semper, porta tellus sit amet,
          eleifend nisl.
        </RichText>
      </svelte:fragment>
    </Item>
    <Item iconName="key-outline">
      <svelte:fragment slot="title">
        <RichText>Title</RichText>
      </svelte:fragment>
      <svelte:fragment slot="content">
        <RichText size="sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas risus nunc, auctor sit
          amet odio sed, ultrices consectetur orci. Donec id dolor semper, porta tellus sit amet,
          eleifend nisl.
        </RichText>
      </svelte:fragment>
    </Item>
  </StepList>
</Story>
