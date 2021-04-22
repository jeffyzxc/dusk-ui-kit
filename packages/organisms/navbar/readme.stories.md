# ⚛️ Navbar

A navigation bar is a user interface element within a webpage that contains links to other sections of the website. 

## Variants

Navbar comes in a variety of color options as listed below.

| Variant   | Usage            |
| --------- | ---------------- |
| BRAND     | Brand's color.   |
| LIGHT     | Light grey color.|
| DARK      | Dark grey color. |
| WHITE     | White.           |
| BLACK     | Black.           |

## Root

Navbar is an Organism made of several Atom's (List, Logo) and also from the Molecule (Menu).

## Action

The navigation bar is an important element of a website's design since it allows users to quickly visit any section within the site.

## Usage

```js
<script>
  import Navbar from "@dusk-network/navbar";
  import Menu from "@dusk-network/menu";
  import List, { Item } from "@dusk-network/list";
  import Logo from "@dusk-network/logo";
  import { variants } from "@dusk-network/helpers";
  let title = "I'm a title";
  let url = "https://github.com/dusk-network";
</script>

<Navbar variant="{variants.ORGANISM.NAVBAR.BRAND}" title="{title}" class="absolute top-0 left-0" id="sb-example-nav">
  <div slot="logo">
    <Logo />
  </div>
  <div slot="networks">
    <Menu orientation="horizontal" name="Network Navigation">
      <List>
        <Item href="javascript:;">Testnet</Item>
      </List>
    </Menu>
  </div>
  <div slot="apps">
    <Menu orientation="horizontal" name="Portal Navigation">
      <List>
        <Item href="javascript:;" active>Explorer</Item>
        <Item href="javascript:;">Wallet</Item>
        <Item href="javascript:;">Staking</Item>
      </List>
    </Menu>
  </div>
  <div slot="links">
    <Menu orientation="horizontal" name="Developer Links">
      <List>
        <Item href="{url}" target="{url.lastIndexOf('dusk.network') === -1 && '_blank'}">
          Github
        </Item>
        <Item href="https://docs.dusk.network">Docs</Item>
      </List>
    </Menu>
  </div>
  <div slot="navigation">
    <Menu orientation="horizontal" name="App Navigation">
      <List>
        <Item href="javascript:;">Chain Info</Item>
        <Item href="javascript:;" active>Blocks</Item>
        <Item href="javascript:;">Transactions</Item>
      </List>
    </Menu>
  </div>
</Navbar>
```