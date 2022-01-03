<script>
  // TODO Clean up content in template etc.
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { variants } from "@dusk-network/helpers";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import SkeletonLoader from "@dusk-network/skeleton-loader";
  import RichText from "@dusk-network/rich-text";
  import Card from "@dusk-network/card";
  import Content from "@dusk-network/content";
  import meta from "../../meta.js";

  let loading = true;

  function timeout() {
    setTimeout(function () {
      loading = false;
      timeout();
    }, 4000);
  }

  timeout();
</script>

<Meta
  title="Components/Atoms/Skeleton Loader"
  component="{SkeletonLoader}"
  parameters="{{
    layout: 'padded',
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

<Story
  name="Default Skeleton Loader"
  args="{{
    height: '272px',
    extraSmallScreenHeight: '188px',
    smallScreenHeight: '180px',
    mediumScreenHeight: '175px',
    largeScreenHeight: '150px',
    extraLargeScreenHeight: '140px',
    jumboScreenHeight: '120px',
    variant: variants.SKELETON_LOADER.DEFAULT,
  }}"
  let:args
>
  <SkeletonLoader {...args} />
</Story>

<Story
  name="Card Example"
  args="{{
    height: '272px',
    extraSmallScreenHeight: '188px',
    smallScreenHeight: '188px',
    mediumScreenHeight: '188px',
    largeScreenHeight: '188px',
    extraLargeScreenHeight: '188px',
    jumboScreenHeight: '188px',
    variant: variants.SKELETON_LOADER.DEFAULT,
    rounded: true,
  }}"
  let:args
>
  <div style="max-width: 500px;">
    {#if loading}
      <SkeletonLoader {...args} />
    {:else}
      <Card>
        <Content>
          <RichText>
            <h3>This took a while to load!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu
              tempor consectetur, nisl nunc consequat nunc, eget consectetur nisl nunc eget
              consectetur nisl nunc.
            </p>
          </RichText>
        </Content>
      </Card>
    {/if}
  </div>
</Story>
