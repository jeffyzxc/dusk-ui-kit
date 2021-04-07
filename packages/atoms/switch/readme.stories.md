# ⚛️ Switch

Switch is a digital on/off switch.

## Variants

| Variant   | Usage            |
| --------- | ---------------- |
| BRAND     | Brand's color.   |
| CTA       | Yellow'ish color.|
| Info      | Skyblue color.   |
| Success   | Green color.     |
| Warning   | Orange color.    |
| Danger    | Red color.       |
| LIGHT     | Light grey color.|
| DARK      | Dark grey color. |


## Actions

Switches are best used for changing the state of system functionalities and preferences.

## Usage

```js
<script>
  import Switch from "@dusk-network/switch";
  import { variants } from "@dusk-network/helpers";
  let demoSwitch = false;
</script>

<div style="background-color:lightgrey;max-width:400px;margin:0 auto;text-align:center;">
 <Switch
   id="demo-switch"
   name="demo_switch"
   variant="{variants.ATOM.SWITCH.DANGER}"
   value="{true}"
   bind:checked="{demoSwitch}">
 </Switch>
 {#if demoSwitch}
   <p>It's on!</p>
 {:else}
   <p>It's off!</p>
 {/if}
</div>
```