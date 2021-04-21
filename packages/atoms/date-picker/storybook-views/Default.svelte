<script>
  import DatePicker from "../";
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
  placeholder="Choose a date"
  on:change="{handler}"
  bind:value />

<p>Selected date: {value}</p>
