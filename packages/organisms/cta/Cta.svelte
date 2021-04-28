<script>
  import Button from "@dusk-network/button/Button.svelte";
  import "./styles.css";

  export let heading = "";
  export let buttonText = "";
  export let href = "#";
</script>

<section class="duk-cta">
  <div class="duk-cta__container">
    <div class="duk-cta__wrapper">
      <h1 class="duk-cta__heading">{heading}</h1>
      <Button variant="brand" size="lg" href="{href}" target="_blank" class="duk-cta__button"
        >{buttonText}</Button
      >
    </div>
  </div>
</section>
