<script>
  import Button from "@dusk-network/button";
  import Control from "@dusk-network/control";
  import Icon from "@dusk-network/icon";
  import Form from "@dusk-network/form";
  import TextField from "@dusk-network/text-field";
  import * as yup from "yup";

  let submitted = false;
  let fields = {
    search_term: "",
  };
  let schema = yup.object().shape({
    search_term: yup
      .string()
      .required()
      .label("Search term")
      .matches(/^([0-9a-fA-F]{64}|\d+)$/g, "should either be a hash or block height value"),
  });
</script>

<Form
  submitted="{submitted}"
  schema="{schema}"
  fields="{fields}"
  submitHandler="{async () => {
    submitted = true;
    if (schema.isValidSync(fields)) {
      alert('Form is valid, search can proceed.');
    }
  }}"
>
  <Control name="search_term" width="full" let:id let:state>
    <TextField
      placeholder="Search for a block hash, block height or transaction hash"
      bind:value="{fields.search_term}"
      id="{id}"
      state="{state}"
    />
    <Button slot="buttonPostfix" type="submit" disable="{submitted}">
      <Icon name="magnify" size="sm" />
    </Button>
  </Control>
</Form>
