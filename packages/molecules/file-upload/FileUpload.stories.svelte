<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import FileUpload from "@dusk-network/file-upload";
  import Form from "@dusk-network/form";
  import Control from "@dusk-network/control";
  import Button from "@dusk-network/button";
  import RichText from '@dusk-network/rich-text';
  import Icon from '@dusk-network/icon';
  import * as yup from "yup";

  let file_size = 1000000;
  let supported_types = ['image/png','image/jpeg']

  let schema = yup.object().shape({
    file: yup
    .mixed()
    .required('A file is required')
    .test('fileSize' , 'File too large' , (value) => value === null || (value && value.size <= file_size))
    .test('fileFormat', 'Unsupported file format', (value)=> value === null || (value && supported_types.includes(value.type))
    )
  });
  let fields = {
    file: null,
  };
  let submitted = false;
  let isFileLoaded = false;

  function dropFile(e) {
      fields.file = e.dataTransfer.files;
      isFileLoaded = true;
      console.log(fields)
  }
  function inputFile(e) {
      fields.file = e.target.files;
      isFileLoaded = true;
      console.log(fields)
  }

  function formSubmit() {
    console.log(fields);
    if (schema.isValidSync(fields)) {
      submitted = true;
      alert("submit form");
    } else {
      submitted = false;
    }
  }
</script>

<Meta
  title="Components/Molecules/File Upload"
  component="{FileUpload}"
  parameters="{{ layout: 'padded' }}"
  argTypes="{{}}"
/>

<Template let:args>
 
  <Form
    submitted="{submitted}"
    schema="{schema}"
    fields="{fields}"
    submitHandler="{formSubmit}"
  >
    <Control  {...args} name="file" let:state>
      <div
        class="duk-file-upload--dropzone"
        on:dragover|preventDefault
        on:dragenter|preventDefault
        on:drop|preventDefault="{dropFile}"
      >
        <div class="duk-file-upload__layout">
          {#if !isFileLoaded && !submitted}
            <RichText>
                <p class="duk-file-upload__text">
                    Drag your file here 
                    <br/>or<br/>
                    <span>Upload File</span>
                </p>
            </RichText>
          {/if}
          {#if isFileLoaded && !submitted}
            <RichText>
                <p class="duk-file-upload__text">{fields.file[0].name}</p>
            </RichText>
          {/if}
          {#if isFileLoaded && submitted}
            <Icon name='check-decagram-outline' size='xxxl'/>
          {/if}
        </div>
        <input class="duk-file-upload--input" type="file" disabled={submitted} on:change="{inputFile}" />
      </div>
    </Control>
    <Control>
      <Button type='submit'size='lg' variant='cta'>Upload</Button>
    </Control>
  </Form>

</Template>

<Story name="Default" args="{{}}" />
