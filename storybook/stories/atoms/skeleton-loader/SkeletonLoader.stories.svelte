<script>
  // TODO Clean up content in template etc.
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { variants } from "@dusk-network/helpers";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import SkeletonLoader from "@dusk-network/skeleton-loader";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Atoms/Skeleton Loader"
  component="{SkeletonLoader}"
  parameters="{{
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/atoms/skeleton-loader/SkeletonLoader.test.js'],
  }}"
  argTypes="{meta('atoms/skeleton-loader/SkeletonLoader', {
    variant: {
      options: Object.values(variants.SKELETON_LOADER),
      control: {
        type: 'select',
      },
    },
  })}"
/>

<Story name="Default Skeleton Loader" args="{{ height: '300' }}" let:args>
  <SkeletonLoader {...args} />
</Story>
