<style lang="postcss">
  .icon-collection-grid {
    @apply grid grid-cols-5 gap-5 w-full m-10;
  }
</style>

<script>
  import Icon from "../Icon.svelte";
  export let variant;
  export let size;
  export let tooltip;
</script>

<div class="icon-collection-grid">
  <Icon name="wallet" title="wallet" variant="{variant}" tooltip="{tooltip}" size="{size}" />
  <Icon
    name="market-cap"
    title="market-cap"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class=""
    name="average-transaction"
    title="average-transaction"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="block-generator"
    title="block-generator"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="provisioner"
    title="provisioner"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="nodes"
    title="nodes"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="wallet-plus"
    title="wallet-plus"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="arrow-left-circle"
    title="arrow-left-circle"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="arrow-right-circle"
    title="arrow-right-circle"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="folder-outline"
    title="folder-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="folder-open-outline"
    title="folder-open-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="content-copy"
    title="content-copy"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="card-search-outline"
    title="card-search-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="folder-search-outline"
    title="folder-search-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="email-outline"
    title="email-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="email-send-outline"
    title="email-send-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="key-outline"
    title="key-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="cog-outline"
    title="cog-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="share-variant"
    title="share-variant"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="checkbox-blank-circle"
    title="checkbox-blank-circle"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="check-circle-outline"
    title="check-circle-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="close-circle-outline"
    title="close-circle-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="eye-settings-outline"
    title="eye-settings-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="file-export-outline"
    title="file-export-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="trash-can-outline"
    title="trash-can-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="folder-download-outline"
    title="folder-download-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="folder-upload-outline"
    title="folder-upload-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="dusk-ticker"
    title="dusk-ticker"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="menu-burger"
    title="menu-burger"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="alert-outline"
    title="alert-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="eye-outline"
    title="eye-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="help-circle-outline"
    title="help-circle-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="chart-line-variant"
    title="chart-line-variant"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="refresh"
    title="refresh"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="menu-burger-close"
    title="menu-burger-close"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="notification-outline"
    title="notification-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="brightness-4"
    title="brightness-4"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="decimal"
    title="decimal"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="view-dashboard-outline"
    title="view-dashboard-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="earth"
    title="earth"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="magnify"
    title="magnify"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="minus-circle-outline"
    title="minus-circle-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="plus-circle-outline"
    title="plus-circle-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="store-outline"
    title="store-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="cube-outline"
    title="cube-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="check-network-outline"
    title="check-network-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="information-variant"
    title="information-variant"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="github"
    title="github"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="youtube"
    title="youtube"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="contract"
    title="contract"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="contacts"
    title="contacts"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="notification"
    title="notification"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="twitter"
    title="twitter"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="linked-in"
    title="linked-in"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="telegram"
    title="telegram"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="coin-market-cap"
    title="coin-market-cap"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="notebook-outline"
    title="notebook-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="bank-transfer"
    title="bank-transfer"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="credit-card"
    title="credit-card"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="timer-sand"
    title="timer-sand"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="pound-box-outline"
    title="pound-box-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="gas-limit"
    title="gas-limit"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="gas-station-outline"
    title="gas-station-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="gas-average"
    title="gas-average"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="crown-outline"
    title="crown-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
  <Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="eye-circle-outline"
    title="eye-circle-outline"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}"
  />
</div>
