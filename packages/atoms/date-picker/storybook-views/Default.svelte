<script>
  import DatePicker from "../DatePicker.svelte";
  export let variant;

  let value;
  export let placeholder;

  const options = {
    enableTime: true,
    onChange: (selectedDates, date, instance) => {
      console.log("Options onChange handler");
      console.log(selectedDates);
      console.log(date);
      console.log(instance);
      instance.close();
    },
  };

  function handler(event) {
    console.log("date change detected!");
    console.log(event);
  }
</script>

<DatePicker
  class="border border-2"
  variant="{variant}"
  options="{options}"
  placeholder="{placeholder}"
  on:change="{handler}"
  bind:value
/>

<p>Selected date: {value}</p>
