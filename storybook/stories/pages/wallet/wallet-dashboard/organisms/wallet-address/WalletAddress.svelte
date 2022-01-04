<script>
  import Address from "@dusk-network/address";
  import Card from "@dusk-network/card";
  import Content from "@dusk-network/content";
  import Heading from "@dusk-network/heading";
  import Button from "@dusk-network/button";
  import Group from "@dusk-network/group";
  import Icon from "@dusk-network/icon";
  import RichText from "@dusk-network/rich-text";
  import QrCode from "@dusk-network/qr-code";
  import { onMount } from "svelte";

  let actionQr = false;
  let actionKey = false;
  let theme, bgColor, qrColor;

  let walletKey =
    "0x66D30033B4E0BAF8970e9c8A0aD1D02Cc3e21115fhkllA9urdrTVbAyQZnwy0JLyvbCVZBHpzfBU87Gy4USFWaA6sZ0";
  let tooltip =
    "The address is your public spend key. It functions similarly to a public key in Ethereum or Bitcoin. You can safely share your address with anyone. They can use it to send you digital assets.";

  function copyToClipboard() {
    navigator.clipboard.writeText(walletKey);
  }

  function qrTheme() {
    if (theme === "dark") {
      qrColor = "#fff";
      bgColor = "#4c4c4c";
    } else {
      qrColor = "#343434";
      bgColor = "#fff";
    }
  }

  onMount(() => {
    theme = localStorage.getItem("theme");
    const target = document.documentElement;
    const callback = function (mutationList) {
      for (const mutation of mutationList) {
        if (mutation.type === "attributes") {
          theme = mutation.target.className;
          qrTheme();
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(target, { attributes: true });
    qrTheme();
  });
</script>

<Card>
  <Heading>
    <h4>Your Address</h4>
    <svelte:fragment slot="help">
      <Icon variant="brand" size="sm" name="help-circle-outline" tooltip="{tooltip}" />
    </svelte:fragment>
    <svelte:fragment slot="button">
      <!-- <h5>REQUEST & AUDIT KEY</h5> -->
      <Group align="right">
        <Button
          variant="brand"
          outline="{actionQr}"
          size="sm"
          on:click="{() => {
            actionKey = false;
            actionQr = !actionQr;
          }}"
        >
          <Icon name="qrcode" />
        </Button>
        <Button variant="brand" size="sm" on:click="{copyToClipboard}">
          <Icon name="content-copy" />
        </Button>
        <Button
          variant="brand"
          outline="{actionKey}"
          size="sm"
          on:click="{() => {
            actionQr = false;
            actionKey = !actionKey;
          }}"
        >
          <Icon name="key-outline" />
        </Button>
      </Group>
    </svelte:fragment>
  </Heading>
  <Content>
    <div style="display: {actionQr === true ? 'block' : 'none'}">
      <QrCode value="{walletKey}" bgColor="{bgColor}" qrColor="{qrColor}" />
    </div>
    <div style="display: {actionKey ? 'block' : 'none'}">
      <Heading variant="danger" align="center">
        <svelte:fragment slot="icon">
          <Icon name="alert-outline" />
        </svelte:fragment>
        <h4>Warning</h4>
      </Heading>
      <RichText>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus faucibus cras nisl
          pellentesque nibh lorem malesuada aliquet proin.
        </p>
      </RichText>
    </div>
    <Address>
      <p>{walletKey}</p>
    </Address>
  </Content>
</Card>
