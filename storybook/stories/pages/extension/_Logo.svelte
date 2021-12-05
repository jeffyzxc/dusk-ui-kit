<style>
  .logo-wrapper {
    width: 275px;
    margin: 0 auto;
    display: block;
    text-align: right;
  }

  .logo-wrapper--danger {
    color: #d96a8a;
  }

  .logo-wrapper--success {
    color: #88b178;
  }
</style>

<script>
  import Logo from "@dusk-network/logo";

  export let state = "default";
</script>

<div
  class="logo-wrapper"
  class:logo-wrapper--danger="{state === 'danger'}"
  class:logo-wrapper--success="{state === 'success'}"
>
  <Logo class="logo" />
  <span>Wallet Extension</span>
</div>
