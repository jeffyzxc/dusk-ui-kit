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
  import RichText from "@dusk-network/rich-text";
  import { page } from "$app/stores";

  export let Examples;
  export let Code;

  $: examples = Examples["helpers"] && Examples["helpers"][$page.params.helper];
  $: sources = Code["helpers"] && Code["helpers"][$page.params.helper];
</script>

<RichText class="w-full max-w-full">
  <h1>{$page.params.helper}</h1>

  <h2>Usage</h2>
  <pre>
    <code>
      import {'{'} {$page.params.helper} {'}'} from "@dusk-network/helpers";
    </code>
  </pre>

  <h2>Examples</h2>
  {#if examples}
    {#each Object.entries(examples) as example, index}
      <svelte:component this="{example[1]}" />
      <pre>
        <code>
          {sources[example[index]]}
        </code>
      </pre>
    {/each}
  {:else}
    <p>No examples found!</p>
  {/if}
</RichText>
