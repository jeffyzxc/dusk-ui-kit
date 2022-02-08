<script>
  import Icon from "@dusk-network/icon";

  export let iconName;
  export let iconViewbox = "0 0 24 24";
</script>

<div class="duk-step-list__item">
  <div class="duk-step-list__item--block">
    {#if iconName}
      <div class="duk-step-list__item--icon">
        <Icon name="{iconName}" viewbox="{iconViewbox}" />
      </div>
    {/if}
  </div>
  <div class="duk-step-list__item--content">
    <div>
      <slot name="title" />
    </div>
    <div>
      <slot name="content" />
    </div>
  </div>
</div>
