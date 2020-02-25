<script>
  import TwoColumn, { Footer } from "../../../templates/two-column";
  import Navbar from "../../../organisms/navbar";
  import Menu from "../../../molecules/menu";
  import List, { Item } from "../../../atoms/list";
  import Logo from "../../../atoms/logo";
  import Card, { Content, Title, Actions } from "../../../atoms/card";
  import { variants, types } from "../../../helpers";
</script>

<TwoColumn class="bg-dark">
  <div slot="header" class="mb-4">
    <Navbar variant="brand">
      <span slot="logo">
        <Logo variant="white" class="w-48" />
      </span>
      <Menu orientation="horizontal">
        <List>
          <Item href="#">Explore</Item>
          <Item href="#">Profile</Item>
        </List>
      </Menu>
    </Navbar>
  </div>
  <div slot="west">
    <Card class="w-full mb-4" variant="cta">
      <Content>
        <h3>Milestones</h3>
        <List type="{types.ATOM.LIST.NUMBERED}" class="ml-3">
          <Item>
            <del>Implement in Svelte</del>
          </Item>
          <Item>
            <del>Write stories</del>
          </Item>
          <Item>Package and deploy</Item>
          <Item>💰</Item>
        </List>
      </Content>
    </Card>
    <Card class="w-full mb-4">
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
      <Title>Dusk UI Kit</Title>
      <Content>
        <p>
          This is a
          <code>Page</code>
          component example. However, a
          <code>Page</code>
          is not implemented in the UI Kit directly. This would be created in
          your client application and rendered after routing.
        </p>
        <p>
          This
          <code>Page</code>
          is constructed using a view for this Storybook demonstration.
        </p>
      </Content>
    </Card>
  </div>
  <div slot="footer" class="mt-4">
    <Footer>
      <Navbar variant="dark">
        <small>
          <Menu orientation="horizontal">
            <List>
              <Item href="#test">Legal</Item>
              <Item href="#test">Terms</Item>
              <Item>Dummy</Item>
            </List>
          </Menu>
        </small>
        <small>Copyright 2020 Dusk Network</small>
      </Navbar>
    </Footer>
  </div>
</TwoColumn>
