<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import FileUpload from "@dusk-network/file-upload";
  import Form from "@dusk-network/form";
  import Control from "@dusk-network/control";
  import Button from "@dusk-network/button";
  import * as yup from "yup";
  import meta from "../../meta.js";

  let schema = yup.object().shape({
    file: yup
      .mixed()
      .label("Upload file")
      .required("A file is required")
      .test("fileSize", "File too large", (value) => value && value[0].size <= 1000000)
      .test(
        "fileFormat",
        "Unsupported file format",
        (value) => value && ["image/png", "image/jpeg"].includes(value[0].type),
      ),
  });

  let fields = {
    file: null,
  };

  let uploaded = false;
  let submitted = false;
  function formSubmit() {
    submitted = true;
    if (schema.isValidSync({ file: fields.file })) {
      uploaded = true;
      submitted = false;
      alert("submit form");
    } else {
      uploaded = false;
    }
  }
</script>

<Meta
  title="Components/Molecules/File Upload"
  component="{FileUpload}"
  parameters="{{
    layout: 'padded',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/molecules/file-upload/FileUpload.test.js'],
  }}"
  argTypes="{meta('molecules/file-upload/FileUpload', {
    onInputFile: {
      action: 'onInputFile',
    },
  })}"
/>

<Story name="Default" args="{{}}" let:args>
  <Form submitted="{submitted}" schema="{schema}" fields="{fields}" submitHandler="{formSubmit}">
    <Control {...args} name="file" let:id let:state>
      <FileUpload
        id="{id}"
        state="{state}"
        uploaded="{uploaded}"
        {...args}
        on:inputFile="{(event) => (fields.file = event.detail.file)}"
      />
    </Control>
    <Control>
      <Button type="submit" size="lg" variant="cta">Upload</Button>
    </Control>
  </Form>
</Story>
