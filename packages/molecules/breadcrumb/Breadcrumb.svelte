<script>
  import Icon from "@dusk-network/icon/Icon.svelte";
  import Item from "@dusk-network/breadcrumb/Item.svelte";
  import "./styles.css";

  const href = "/";
</script>

<ul class="{$$props.class || ''} duk-breadcrumb">
  <Item href="{href}">
    <Icon name="backspace-outline" />
  </Item>
  <slot />
</ul>
