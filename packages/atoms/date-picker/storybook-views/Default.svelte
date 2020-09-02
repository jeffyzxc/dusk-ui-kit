<script>
  import DatePicker from "../";
  export let variant;
  export let tone;

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

<DatePicker {variant} {tone} {options} on:change="{handler}" bind:value />

<p>Selected date: {value}</p>
