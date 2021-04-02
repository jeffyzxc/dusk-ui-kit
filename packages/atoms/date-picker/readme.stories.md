# ⚛️ Date Picker

Date picker allowes the user to pick a date from a calendar that appears when the user toggles it.

## Variants

| Variant   | Usage                                                                |
| --------- | -------------------------------------------------------------------- |
| Primary   | Primary buttons are used for the principle call to action on a page. |
| Secondary | Secondary buttons are used for the secondary actions on a page.      |
| Info      | Info buttons are used for a passive action on a page.                |
| Success   | Success buttons are used for a positive action on a page.            |
| Warning   | Warning buttons are used for a risky action on a page.               |
| Danger    | Danger buttons are used for a negative action on a page.             |

## Size

Cards assume no specific width to start, so they’ll be 100% wide unless otherwise stated.

| Size  | Usage                                                                |
| ----- | -------------------------------------------------------------------- |
| 100%  | Wide as the max-width of the element is palced in.                   |

## Actions

By clicking on the Date picker filed a calendar appears and by the date is picked by clicking on it.

## Usage

```js
<script>
  import DatePicker from "@dusk-network/date-picker";
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
  };
</script>
<DatePicker
  class="border border-2"
  variant="{variant}"
  options="{options}"
  on:change="{handler}"
  bind:value />

<p>Selected date: {value}</p>
```
