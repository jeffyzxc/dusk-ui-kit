<script>
  import TextField from "@dusk-network/text-field";
  import Button from "@dusk-network/button";
  import Control from "@dusk-network/control";
  import Form from "@dusk-network/form";
  import Icon from "@dusk-network/icon";
</script>

<Form class="duk-footer__newsletter">
  <h3 class="duk-footer__title">Subscribe to our newsletter</h3>
  <Control width="full" buttonPostfix="{true}">
    <TextField name="email" id="email" placeholder="Enter your email address" />
    <Button variant="cta" slot="buttonPostfix">
      <Icon name="email-outline" />
    </Button>
  </Control>
</Form>
