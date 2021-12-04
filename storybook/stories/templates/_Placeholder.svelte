<style>
  .placeholder {
    font-size: 150%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<script>
  export let width = "100%";
  export let height = "100%";
  export let backgroundColor = "#261457";
  export let textColor = "#C1B1ED";
  export let text = undefined;
</script>

<div
  class="placeholder"
  style="background-color: {backgroundColor}; height: {height}; width: {width}"
>
  <p style="color: {textColor}">{text}</p>
</div>
