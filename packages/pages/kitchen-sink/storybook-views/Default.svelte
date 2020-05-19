<script>
  import TwoColumn, { Header, Footer } from "@dusk/two-column";
  import Navbar from "@dusk/navbar";
  import Menu from "@dusk/menu";
  import List, { Item } from "@dusk/list";
  import Logo from "@dusk/logo";
  import Card, { Content, Title } from "@dusk/card";
  import { types } from "@dusk/helpers";
</script>

<TwoColumn class="bg-gray-100">
  <div slot="header">
    <Header class="mb-6">
      <Navbar variant="brand">
        <span slot="logo">
          <Logo variant="white" class="w-48" />
        </span>
        <Menu orientation="horizontal">
          <List>
            <Item href="javascript:;">Explore</Item>
            <Item href="javascript:;">Profile</Item>
          </List>
        </Menu>
      </Navbar>
    </Header>
  </div>
  <div slot="west">
    <Card class="w-full mb-6" variant="brand">
      <Title>
        <h2>Milestones</h2>
      </Title>
      <Content>
        <List type="{types.ATOM.LIST.NUMBERED}" class="ml-3">
          <Item>
            <del>Implement in Svelte</del>
          </Item>
          <Item>
            <del>Write stories</del>
          </Item>
          <Item>
            <del>Package and deploy</del>
          </Item>
          <Item>💰</Item>
        </List>
      </Content>
    </Card>
    <Card class="w-full mb-6">
      <Content>
        <p>
          Contact
          <a href="mailto:kieran@dusk.network">Kieran</a>
          for more information
        </p>
      </Content>
    </Card>
  </div>
  <div slot="east">
    <Card class="w-full min-h-screen">
      <Title>
        <h1>Dusk UI Kit</h1>
      </Title>
      <Content>
        <p>
          This is a
          <code>Page</code>
          component example. However, a
          <code>Page</code>
          is not implemented in the UI Kit directly. This would be created in your client
          application and rendered after routing.
        </p>
        <p>
          This
          <code>Page</code>
          is constructed using a view for this Storybook demonstration.
        </p>
      </Content>
    </Card>
  </div>
  <div slot="footer">
    <Footer class="mt-6">
      <Navbar variant="brand">
        <Menu orientation="horizontal" class="mb -3">
          <List>
            <Item href="javascript:;">Legal</Item>
            <Item href="javascript:;">Terms</Item>
            <Item href="javascript:;">Privacy</Item>
            <Item>Disabled</Item>
          </List>
        </Menu>
        <small class="text-white">Dusk Network 2020</small>
      </Navbar>
    </Footer>
  </div>
</TwoColumn>
