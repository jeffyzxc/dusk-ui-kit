<script>
  import "./styles.css";
  import QRCode from "qrcode";
  import { onMount } from "svelte";

  /**
   * Value used in generating the QR Code
   */
  export let value = "";

  /**
   * Sets the width of the rendered QR Code
   */
  export let width = 200;

  /**
   * Sets the color of the QR Code
   */
  export let qrColor = "#343434";

  /**
   * Sets the background color of the QR Code
   */
  export let bgColor = "#fff";

  let src;

  $: width, renderQr();
  $: qrColor, renderQr();
  $: bgColor, renderQr();

  function renderQr() {
    QRCode.toDataURL(value, { width: width, color: { dark: qrColor, light: bgColor } })
      .then((url) => {
        src = url;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  onMount(() => {
    renderQr();
  });
</script>

<div class="{$$props.class || ''} duk-qr-code">
  <img src="{src}" alt="Key QR code" />
</div>
