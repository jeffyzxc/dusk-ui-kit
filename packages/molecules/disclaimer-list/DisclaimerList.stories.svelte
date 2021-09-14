<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import DisclaimerList, { Item } from "@dusk-network/disclaimer-list";
  import Icon from "@dusk-network/icon";
  import RichText from "@dusk-network/rich-text";
</script>

<Meta
  title="Components/Molecules/Disclaimer List"
  component="{DisclaimerList}"
  parameters="{{ layout: 'padded' }}"
  argTypes="{{}}"
/>

<Template let:args>  
  <DisclaimerList>
    <Item>
      <svelte:fragment slot="icon">
        <Icon name="alert-outline" size="xl" variant="danger"/>
      </svelte:fragment>
      <RichText>
        <p>Warning</p>
      </RichText>
    </Item>

    <Item type='{2}'>
      <svelte:fragment slot="icon">
        <Icon name="safe" size="xxxl" variant="danger"/>
      </svelte:fragment>
      <RichText size="sm">
        <h2>Don't Lose It</h2>
        <p>If you lose your keystore file, your wallet will be lost.</p>
      </RichText>
    </Item>
    <Item type='{2}'>
      <svelte:fragment slot="icon">
        <Icon name="eye-outline" size="xxxl" variant="danger"/>
      </svelte:fragment>
      <RichText size="sm">
        <h2>Don't Share It</h2>
        <p>Anyone with your keystore file can access your funds.<br> Beware of malicious phishing sites.</p>
      </RichText>
    </Item>
    <Item type='{2}'>
      <svelte:fragment slot="icon">
        <Icon name="content-save-alert-outline" size="xxxl" variant="danger"/>
      </svelte:fragment>
      <RichText size="sm">
        <h2>Store It Securely</h2>
        <p>Secure it like the milions of dollars it may one day be worth</p>
      </RichText>
    </Item>
  </DisclaimerList>
</Template>

<Story name="Default" args="{{}}" />

