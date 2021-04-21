<script>
  import DatePicker from "../DatePicker.svelte";
  export let variant;

  let value;

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
  on:change="{handler}"
  bind:value
/>

<p>Selected date: {value}</p>
