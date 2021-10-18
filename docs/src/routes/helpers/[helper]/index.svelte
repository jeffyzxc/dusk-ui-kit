<script context="module">
  import SourceCode from "@ui-kit-example";

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load() {
    const Examples = await import("@dusk-network/dusk-ui-kit-examples");

    return {
      props: { Examples, Code: SourceCode },
    };
  }
</script>

<script>
  import { HighlightSvelte } from "svelte-highlight";
  import RichText from "@dusk-network/rich-text";
  import { page } from "$app/stores";

  export let Examples;
  export let Code;

  $: examples = Examples["helpers"] && Examples["helpers"][$page.params.helper];
  $: sources = Code["helpers"] && Code["helpers"][$page.params.helper];
</script>

<RichText class="w-full max-w-full mb-10">
  <h1>{$page.params.helper}</h1>

  <h2>Usage</h2>
  <pre>
    <code>
      import {'{'} {$page.params.helper} {'}'} from "@dusk-network/helpers";
    </code>
  </pre>
</RichText>

<RichText class="w-full max-w-full mb-10">
  <h2>Examples</h2>
</RichText>

{#if examples}
  {#each Object.entries(examples) as example, index}
    <div class="my-10">
      <svelte:component this="{example[1]}" />
    </div>
    <HighlightSvelte code="{sources[example[index]]}" langtag="{true}" />
  {/each}
{:else}
  <RichText class="w-full max-w-full mb-10">
    <p>No examples found!</p>
  </RichText>
{/if}
