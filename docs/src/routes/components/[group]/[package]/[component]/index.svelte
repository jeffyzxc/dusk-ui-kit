<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, stuff }) {
    const component = page.params.component;
    const meta = stuff.components[page.params.group][page.params.package][component];
    const Examples = await import("@dusk-network/dusk-ui-kit-examples");

    return {
      props: { component, meta, Examples: Examples[component] },
    };
  }
</script>

<script>
  import RichText from "@dusk-network/rich-text";
  import SourceCode from "@ui-kit-example";
  import { page } from "$app/stores";
  export let meta;
  export let component;
  export let Examples;

  const determineType = (prop) => {
    const typeTag = prop.tags.find(({ tag }) => tag === "type");
    let type;

    if (typeTag) ({ type } = typeTag);
    else if (prop.value && /^['"`].+?['"`]$/.test(prop.value)) {
      type = "string";
    } else {
      try {
        type = typeof JSON.parse(prop.value);
      } catch {
        type = "any";
      }
    }

    return type;
  };
</script>

<RichText class="w-full max-w-full">
  <h1>{component}</h1>
  <h2>Installation</h2>
  <pre>
    <code>
      npm i -D @dusk-network/{$page.params.package}
    </code>
  </pre>

  <h2>Examples</h2>
  <svelte:component this="{Examples}" />
  <pre>
      <code>
        {SourceCode[`${$page.params.component}`]}
      </code>
    </pre>
  <h2>Props</h2>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {#each Object.entries(meta.props) as prop}
        <tr>
          <td>{prop[0]}</td>
          <td>{determineType(prop[1])}</td>
          <td>{prop[1]["required"]}</td>
          <td><code>{prop[1]["value"]}</code></td>
          <td>{prop[1]["description"]}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</RichText>
