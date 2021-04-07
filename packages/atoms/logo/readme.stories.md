# ⚛️ Logo

Dusk Network's logo

## Variants

Logo comes in a variety of colors that should be utilised according to the following instructions.

| Variant | Usage                                                                |
| ------- | ---------------- |
| BRAND   | Brand's color    |
| CTA     | Yellow'ish color |
| Info    | Skyblue color    |
| LIGHT   | Light grey color |
| DARK    | Dark grey color  |
| WHITE   | White            |
| BLACK   | Black            |


## Usage

```js
<script>
  import Logo from "@dusk-network/logo";
  import { variants } from "@dusk-network/helpers";
  export let href;
</script>
//variants can be changed by changing 'DARK' to any of the variants options above.
<div class="p-10 w-6/12 mx-auto">
  <Logo variant="{variants.ATOM.LOGO.DARK}" {href} style="width: 305px" />
</div>
```