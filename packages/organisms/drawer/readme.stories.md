# ⚛️ Drawer

??

## Variants

| Variant   | Usage                             |
| --------- | --------------------------------- |
| BRAND     | Applies a brand styling.          |
| CTA       | Applies a call to action styling. |
| Info      | Applies a info styling.           |
| Success   | Applies a success styling.        |
| Warning   | Applies a warning styling.        |
| Danger    | Applies a danger styling.         |
| LIGHT     | Applies a light styling.          |
| DARK      | Applies a dark styling.           |
| WHITE     | Applies a White styling.          |
| BLACK     | Applies a Black styling.          |

## Stats

| State     | Usage                             |
| --------- | --------------------------------- |
| BRAND     | Applies a brand styling.          |
| CTA       | Applies a call to action styling. |
| Info      | Applies a info styling.           |
| Success   | Applies a success styling.        |
| Warning   | Applies a warning styling.        |
| Danger    | Applies a danger styling.         |
| LIGHT     | Applies a light styling.          |
| DARK      | Applies a dark styling.           |
| WHITE     | Applies a White styling.          |
| BLACK     | Applies a Black styling.          |

## Usage

```js
<script>
  import Drawer from "@dusk-network/drawer";
  import Menu from "@dusk-network/menu";
  import List, { Item } from "@dusk-network/list";
  import Logo from "@dusk-network/logo";
  import Icon from "@dusk-network/icon";
  import { sizes, variants } from "@dusk-network/helpers";
  const active = true;
</script>

<Drawer variant="{variants.ORGANISM.DRAWER.BRAND}" class="sm:min-h-screen">
  <div slot="logo">
    <Logo class="w-48" />
  </div>
  <Menu>
    <List>
      <Item href="javascript:;" active="{active}">
        <Icon name="view-dashboard-outline" size="{sizes.ATOM.ICON.SMALL}" />
        <div class="hidden sm:inline-block">Dashboard</div>
      </Item>
      <Item href="javascript:;">
        <Icon name="wallet" size="{sizes.ATOM.ICON.SMALL}" />
        <div class="hidden sm:inline-block">Wallet</div>
        <List>
          <Item href="javascript:;">
            <Icon name="arrow-right-circle" size="{sizes.ATOM.ICON.SMALL}" />
            <div class="hidden sm:inline-block">Send</div>
          </Item>
          <Item href="javascript:;">
            <Icon name="arrow-left-circle" size="{sizes.ATOM.ICON.SMALL}" />
            <div class="hidden sm:inline-block">Recieve</div>
          </Item>
        </List>
      </Item>
    </List>
  </Menu>
  <Menu>
    <List>
      <Item href="#test">
        <Icon name="help-circle-outline" size="{sizes.ATOM.ICON.SMALL}" />
        <div class="hidden sm:inline-block">Help</div>
      </Item>
      <Item href="#test">
        <Icon name="cog-outline" size="{sizes.ATOM.ICON.SMALL}" />
        <div class="hidden sm:inline-block">Settings</div>
      </Item>
    </List>
  </Menu>
</Drawer>
```