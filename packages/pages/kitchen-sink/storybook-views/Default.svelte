<script>
  import TwoColumn, { Header } from "@dusk-network/two-column";
  import Navbar from "@dusk-network/navbar";
  import Menu from "@dusk-network/menu";
  import List, { Item } from "@dusk-network/list";
  import Logo from "@dusk-network/logo";
  import Card, { Content, Title } from "@dusk-network/card";
  import { types } from "@dusk-network/helpers";
  import Form from "@dusk-network/form";
  import Control from "@dusk-network/control";
  import TextField from "@dusk-network/text-field";
  import Footer from "@dusk-network/footer";
  import DatePicker from "@dusk-network/date-picker";
</script>

<TwoColumn class="bg-gray-100">
  <div slot="header">
    <Header class="mb-5">
      <Navbar variant="brand" id="sb-example-nav">
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
              <Item href="javascript:;">Github</Item>
              <Item href="javascript:;">Wiki</Item>
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
    </Header>
  </div>
  <div slot="west">
    <Card class="w-full mb-5" variant="brand">
      <Title>
        <h2>Milestones</h2>
      </Title>
      <Content>
        <List type="{types.ATOM.LIST.NUMBERED}" class="ml-3">
          <Item><del>Implement in Svelte</del></Item>
          <Item><del>Write stories</del></Item>
          <Item><del>Package and deploy</del></Item>
          <Item>💰</Item>
        </List>
      </Content>
    </Card>
    <Card class="w-full mb-6">
      <Content>
        <p>Contact <a href="mailto:kieran@dusk.network">Kieran</a> for more information</p>
      </Content>
    </Card>
  </div>
  <div slot="east">
    <Card class="w-full mb-5">
      <Title>
        <h2>Dusk UI Kit</h2>
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
        <p>This <code>Page</code> is constructed using a view for this Storybook demonstration.</p>
      </Content>
    </Card>
    <Card class="w-full mb-5">
      <Title>
        <h2>Form Example</h2>
      </Title>
      <Content>
        <Form class="px-5">
          <Control label="Name">
            <TextField placeholder="Enter your full name" />
          </Control>
          <Control label="Email">
            <TextField type="email" placeholder="Enter your email address" />
          </Control>
          <Control label="Password">
            <TextField type="password" />
          </Control>
          <Control label="Repeat Password">
            <TextField type="password" />
          </Control>
          <Control label="Date of birth">
            <DatePicker />
          </Control>
        </Form>
      </Content>
    </Card>
  </div>
  <div slot="footer">
    <Footer />
  </div>
</TwoColumn>
