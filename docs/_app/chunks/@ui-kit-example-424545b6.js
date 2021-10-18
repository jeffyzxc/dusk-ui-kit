var n=JSON.parse('{"atoms":{"drop-down":{"DropDown_01":"<script>\\n  import DropDown from \\"@dusk-network/drop-down\\";\\n\\n  const options = [\\"option 1\\", \\"option 2\\", \\"option 3\\", \\"option 4\\", \\"option 5\\"];\\n<\/script>\\n\\n<DropDown options=\\"{options}\\" />\\n"},"loading-indicator":{"LoadingIndicator_01":"<script>\\n  import LoadingIndicator from \\"@dusk-network/loading-indicator\\";\\n<\/script>\\n\\n<LoadingIndicator />\\n"},"text-field":{"TextField_01":"<script>\\n  import TextField from \\"@dusk-network/text-field\\";\\n<\/script>\\n\\n<TextField name=\\"simple_text-field\\" placeholder=\\"A simple text field\\" />\\n"}},"helpers":{"contexts":{"Contexts_01":"<script>\\n  import { contexts } from \\"@dusk-network/helpers\\";\\n<\/script>\\n\\n<p>A list of available <code>Button</code> contexts:</p>\\n<ul>\\n  {#each Object.entries(contexts.BUTTON) as context}\\n    <li>{context[0]}</li>\\n  {/each}\\n</ul>\\n<p>\\n  Access a contexts directly. <code>contexts.BUTTON.HEADING</code> is \\"{contexts.BUTTON.HEADING}\\"\\n</p>\\n"},"icons":{"Icons_01":"<script>\\n  import { icons } from \\"@dusk-network/helpers\\";\\n  import Icon from \\"@dusk-network/icon\\";\\n<\/script>\\n\\n<p>A list of available icons:</p>\\n\\n<ul>\\n  {#each Object.entries(icons) as icon}\\n    <li>{icon[0]}</li>\\n  {/each}\\n</ul>\\n\\n<p>Use an icon:</p>\\n\\n<Icon name=\\"{icons.DUSK_TICKER}\\" />\\n"},"orientations":{"Orientations_01":"<script>\\n  import { orientations } from \\"@dusk-network/helpers\\";\\n<\/script>\\n\\n<p>A list of available <code>Menu</code> orientations:</p>\\n\\n<ul>\\n  {#each Object.entries(orientations.MENU) as orientation}\\n    <li>{orientation[0]}</li>\\n  {/each}\\n</ul>\\n"},"sizes":{"Sizes_01":"<script>\\n  import { sizes } from \\"@dusk-network/helpers\\";\\n<\/script>\\n\\n<p>A list of available <code>Button</code> sizes:</p>\\n\\n<ul>\\n  {#each Object.entries(sizes.BUTTON) as size}\\n    <li>{size[0]}</li>\\n  {/each}\\n</ul>\\n"},"states":{"States_01":"<script>\\n  import { states } from \\"@dusk-network/helpers\\";\\n<\/script>\\n\\n<p>A list of available <code>TextField</code> states:</p>\\n\\n<ul>\\n  {#each Object.entries(states.TEXT_FIELD) as state}\\n    <li>{state[0]}</li>\\n  {/each}\\n</ul>\\n"},"types":{"Types_01":"<script>\\n  import { types } from \\"@dusk-network/helpers\\";\\n<\/script>\\n\\n<p>A list of available <code>TextField</code> types:</p>\\n\\n<ul>\\n  {#each Object.entries(types.TEXT_FIELD) as type}\\n    <li>{type[0]}</li>\\n  {/each}\\n</ul>\\n"},"variants":{"Variants_01":"<script>\\n  import { variants } from \\"@dusk-network/helpers\\";\\n  import Button from \\"@dusk-network/button\\";\\n<\/script>\\n\\n<p>A list of available Button variants:</p>\\n\\n<ul>\\n  {#each Object.entries(variants.BUTTON) as variant}\\n    <li>{variant[0]}</li>\\n  {/each}\\n</ul>\\n\\n<p>Access a variant directly. <code>variants.BUTTON.BRAND</code> is \\"{variants.BUTTON.BRAND}\\"</p>\\n<p>Use a variant in a component:</p>\\n\\n<Button variant=\\"{variants.BUTTON.BRAND}\\">I am a brand variant</Button>\\n"},"widths":{"Widths_01":"<script>\\n  import { widths } from \\"@dusk-network/helpers\\";\\n<\/script>\\n\\n<p>A list of available <code>Control</code> widths:</p>\\n\\n<ul>\\n  {#each Object.entries(widths.CONTROL) as width}\\n    <li>{width[0]}</li>\\n  {/each}\\n</ul>\\n"}},"molecules":{"button":{"Button_01":"<script>\\n  import Button from \\"@dusk-network/button\\";\\n<\/script>\\n\\n<Button>Hi there</Button>\\n"},"control":{"Control_01":"<script>\\n  import Control from \\"@dusk-network/control\\";\\n  import TextField from \\"@dusk-network/text-field\\";\\n<\/script>\\n\\n<Control width=\\"full\\" label=\\"Control label\\" let:id>\\n  <TextField name=\\"control_test\\" placeholder=\\"A controlled text field\\" id=\\"{id}\\" />\\n</Control>\\n"}},"organisms":{"card":{"Card_01":"<script>\\n  import Card, { Content } from \\"@dusk-network/card\\";\\n<\/script>\\n\\n<Card>\\n  <Content>Hi there</Content>\\n</Card>\\n"},"wizard":{"Wizard_01":"<script>\\n  import Wizard, { Step } from \\"@dusk-network/wizard\\";\\n<\/script>\\n\\n<Wizard stepCount=\\"{2}\\">\\n  <Step step=\\"{1}\\">step 1</Step>\\n  <Step step=\\"{2}\\">step 2</Step>\\n</Wizard>\\n"}}}');export{n as S};
