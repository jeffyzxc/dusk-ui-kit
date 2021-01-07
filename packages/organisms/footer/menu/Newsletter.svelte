<script>
  import { exclude } from "@dusk-network/helpers";
  import TextField from "@dusk-network/text-field";
  import Button from "@dusk-network/button";
</script>

<form class="duk-footer__newsletter block" {...exclude($$props, ['class'])}>
  <h3 class="duk-footer__title">Subscribe to our newsletter</h3>
  <TextField name="email" id="email" placeholder="Enter your email address" />
  <Button variant="cta">Subscribe</Button>
</form>
