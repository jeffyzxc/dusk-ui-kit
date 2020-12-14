<script>
  import { exclude } from "@dusk/helpers";
  import TextField from "@dusk/text-field";
  import Button from "@dusk/button";
</script>

<form class="duk-footer__newsletter block" {...exclude($$props, ['class'])}>
  <h3 class="duk-footer__title">Subscribe to our newsletter</h3>
  <TextField name="email" id="email" placeholder="Enter your email address" />
  <Button variant="cta">Subscribe</Button>
</form>
