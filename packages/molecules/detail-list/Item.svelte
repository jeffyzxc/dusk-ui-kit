<script>
  import Icon from "@dusk-network/icon";
  export let helpText = "";
</script>

<dt class="duk-detail-list__term">
  <slot name="icon" />
  <slot name="term" />
  {#if helpText}
    <Icon name="help-circle-outline" size="sm" class="duk-detail-list__help" tooltip="{helpText}" />
  {/if}
</dt>
<dd class="duk-detail-list__definition">
  <slot name="definition" />
</dd>
