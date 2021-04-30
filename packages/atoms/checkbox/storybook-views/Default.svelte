<script>
  import Checkbox from "../Checkbox.svelte";
  export let variant;
  export let label1;
  export let label2;
</script>

<Checkbox role="checkbox" aria-checked="true" variant="{variant}" name="check_2" id="check_1"
  >{label1}</Checkbox
>
<Checkbox
  data-testid="checkbox-result"
  role="checkbox"
  aria-checked="false"
  variant="{variant}"
  name="check_2"
  id="check_2">{label2}</Checkbox
>
