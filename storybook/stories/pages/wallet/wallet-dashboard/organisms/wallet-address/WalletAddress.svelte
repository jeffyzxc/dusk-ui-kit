<script>
  import Heading from "@dusk-network/heading";
  import Button from "@dusk-network/button";
  import Icon from "@dusk-network/icon";
  import RichText from "@dusk-network/rich-text";
  import QRCode from "qrcode";
  import { onMount } from "svelte";

  let actionQr = false;
  let actionKey = false;

  let walletKey =
    "0x66D30033B4E0BAF8970e9c8A0aD1D02Cc3e21115fhkllA9urdrTVbAyQZnwy0JLyvbCVZBHpzfBU87Gy4USFWaA6sZ0";
  let src;
  let tooltip =
    "The address is your public spend key. It functions similarly to a public key in Ethereum or Bitcoin. You can safely share your address with anyone. They can use it to send you digital assets.";

  onMount(() => {
    QRCode.toDataURL(walletKey, { width: 200, color: { dark: "#343434", light: "#fff" } })
      .then((url) => {
        src = url;
      })
      .catch((err) => {
        console.error(err);
      });
  });

  function copyToClipboard() {
    navigator.clipboard.writeText(walletKey);
  }
</script>

<div class="wallet-addresses">
  <div class="wallet-address">
    <div class="wallet-address__first">
      <div class="wallet-address__first--heading">
        <Heading class="wallet-address__first--heading-text">
          <h4>Your Address</h4>
        </Heading>
        <Icon
          class="wallet-address__image"
          variant="brand"
          size="sm"
          name="help-circle-outline"
          tooltip="{tooltip}"
        />
      </div>
      <RichText>
        <p class="wallet-address__text">REQUEST & AUDIT KEY</p>
      </RichText>
    </div>
    <div class="wallet-address__second">
      <RichText>
        <p class="wallet-address__text--first">
          <strong>{walletKey.substring(0, 4) + "..."}</strong>
        </p>
      </RichText>
      <div class="wallet-address__block">
        <div>
          <Button
            variant="brand"
            outline="{actionQr}"
            size="sm"
            class="wallet-address__button"
            on:click="{() => {
              actionKey = false;
              actionQr = !actionQr;
            }}"
          >
            <Icon variant="default" size="base" name="qrcode" />
          </Button>
        </div>
        <div>
          <Button
            variant="brand"
            size="sm"
            class="wallet-address__button"
            on:click="{copyToClipboard}"
          >
            <Icon variant="default" size="base" name="content-copy" />
          </Button>
        </div>
        <div>
          <Button
            variant="brand"
            outline="{actionKey}"
            size="sm"
            class="wallet-address__button"
            on:click="{() => {
              actionQr = false;
              actionKey = !actionKey;
            }}"
          >
            <Icon variant="default" size="base" name="key-outline" />
          </Button>
        </div>
      </div>
    </div>
    <div class="wallet-key" class:open="{actionQr === true}">
      <img class="wallet-key__code" src="{src}" alt="Key QR code" />
      <div class="wallet-key__key">
        <p class="wallet-key__text">{walletKey}</p>
      </div>
    </div>
    <div class="wallet-info" class:open="{actionKey === true}">
      <div class="wallet-info__warning">
        <Heading size="sm" variant="danger">
          <svelte:fragment slot="icon">
            <Icon size="sm" name="alert-outline" />
          </svelte:fragment>
          <h4>Warning</h4>
        </Heading>
      </div>
      <RichText>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus faucibus cras nisl
          pellentesque nibh lorem malesuada aliquet proin.
        </p>
      </RichText>
      <div class="wallet-info__key">
        <p class="wallet-info__text">{walletKey}</p>
      </div>
    </div>
    <div class="wallet-address__first--mobile">
      <p class="wallet-address__text--mobile">{walletKey}</p>
    </div>
  </div>
</div>
