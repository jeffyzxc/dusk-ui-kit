<script>
  import Template from "../default";
  import "./styles.css";
</script>

<Template class="{$$props.class || ''} duk-template-explorer-homepage" $$restProps="{$$restProps}">
  <div class="duk-template-explorer-homepage__control-panel">
    <slot name="control-panel" />
  </div>
  <div class="duk-template-explorer-homepage__latest">
    <div class="duk-template-explorer-homepage__latest-blocks">
      <slot name="latest-blocks" />
    </div>
    <div class="duk-template-explorer-homepage__latest-blocks">
      <slot name="latest-transactions" />
    </div>
  </div>
</Template>
