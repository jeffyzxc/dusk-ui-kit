<script>
  import { exclude, variants, tones } from "@dusk/helpers";
  import FlatPickr from "svelte-flatpickr";
  import { Label } from "@dusk/elements";

  import "flatpickr/dist/flatpickr.css";
  import "flatpickr/dist/themes/light.css";
  import "./styles.css";

  let className = "";
  export { className as class };

  export let id;
  // export let name;
  export let variant = variants.ATOM.DATE_PICKER.BRAND;
  export let tone = tones.ATOM.DATE_PICKER.APP;
  // export let disabled = false;
  export const use = [];

  // const forwardEvents = forwardEventsBuilder(current_component);

  function getClassNames(variant, tone) {
    let classNames = `duk-date-picker--${variant} duk-date-picker--${tone}`;
    return classNames;
  }

  let date = null;
  const flatpickrOptions = {
    enableTime: true,
    onChange: (selectedDates, dateStr, instance) => {
      console.log("Options onChange handler");
      console.log(selectedDates);
      console.log(dateStr);
      console.log(instance);
    },
  };

  function handleChange(selectedDates, dateStr, instance) {
    console.log("Handle change.");
    console.log(selectedDates);
    console.log(dateStr);
    console.log(instance);
  }
</script>

<Label
  for="{id}"
  class="duk-date-picker {className}
  {getClassNames(variant, tone)}"
  {...exclude($$props, ['use', 'class', 'variant', 'id', 'name', 'type'])}>
  <FlatPickr
    options="{flatpickrOptions}"
    bind:value="{date}"
    placeholder="optional placeholder"
    on:change="{handleChange()}" />
</Label>
