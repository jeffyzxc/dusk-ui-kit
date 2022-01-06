<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/wallet-wizard";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Navbar from "../_Navbar.svelte";
  import Footer from "../_Footer.svelte";
  import Card from "@dusk-network/card";
  import Content from "@dusk-network/content";
  import Wizard, { Step } from "@dusk-network/wizard";
  import Button from "@dusk-network/button";
  import Form from "@dusk-network/form";
  import Control from "@dusk-network/control";
  import TextField from "@dusk-network/text-field";
  import FileUpload from "@dusk-network/file-upload";
  import ProgressBar from "@dusk-network/progress-bar";
  import * as yup from "yup";
  import meta from "../../../meta";

  let stepTitles = ["Upload Your Keystore File", "Enter Your Password", ""];
  let currentStep;

  let fields = {
    password: "",
  };

  let fileField = {
    file: null,
  };

  let schema = yup.object().shape({
    password: yup.string().required().label("Password"),
  });

  let fileSchema = yup.object().shape({
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

  let fileSubmitted = false;
  let passSubmitted = false;
  let isFileLoaded = false;
  let uploaded = false;

  function inputChange(event) {
    if (event.detail.file !== null) {
      fileField.file = event.detail.file;
      isFileLoaded = true;
    } else {
      fileField.file = null;
      isFileLoaded = false;
    }
  }
</script>

<Meta
  title="Pages/Wallet/Access Keystore"
  component="{Template}"
  parameters="{{
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'code',
      },
    },
    darkMode: {
      stylePreview: false,
    },
    // jest: ['packages/templates/wallet-option/WalletCreateOptions.test.js'],
  }}"
  argTypes="{meta('templates/wallet-wizard/WalletWizard', {})}"
/>

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="navbar">
      <Navbar />
    </svelte:fragment>
    <svelte:fragment slot="wizard">
      <Card class="keystore-login__wrapper">
        <Content>
          <Wizard
            stepCount="{2}"
            on:exit="{() => {}}"
            on:step="{(event) => (currentStep = event.detail - 1)}"
          >
            <h3 slot="title">{stepTitles[currentStep]}</h3>
            <div slot="progress-bar" let:steps let:step>
              <ProgressBar steps="{steps}" step="{step}" />
            </div>
            <Step number="{1}" let:next>
              <Form
                submitted="{fileSubmitted}"
                schema="{fileSchema}"
                fields="{fileField}"
                submitHandler="{() => {
                  fileSubmitted = true;
                  if (fileSchema.isValidSync({ file: fileField.file })) {
                    uploaded = true;
                  } else {
                    uploaded = false;
                  }
                }}"
              >
                <Control width="full" name="file" let:id let:state>
                  <FileUpload
                    id="{id}"
                    state="{state}"
                    uploaded="{uploaded}"
                    on:inputFile="{inputChange}"
                  />
                </Control>

                {#if !uploaded}
                  <Button
                    class="keystore-login__cta"
                    variant="cta"
                    size="base"
                    disabled="{!isFileLoaded}"
                    type="submit">Upload</Button
                  >
                {/if}
                {#if uploaded}
                  <Button
                    class="keystore-login__cta"
                    variant="cta"
                    size="base"
                    on:click="{() => {
                      next();
                      uploaded = false;
                    }}">Continue</Button
                  >
                {/if}
              </Form>
            </Step>
            <Step number="{2}">
              <Form
                submitted="{passSubmitted}"
                schema="{schema}"
                fields="{fields}"
                submitHandler="{() => {
                  passSubmitted = true;
                  if (schema.isValidSync(fields)) {
                    // goto('/dashboard');
                  }
                }}"
              >
                <Control width="full" name="password" let:id let:state>
                  <TextField
                    id="{id}"
                    state="{state}"
                    bind:value="{fields.password}"
                    type="password"
                    placeholder="Password"
                  />
                </Control>

                <Button class="keystore-login__cta" type="submit" variant="cta"
                  >Access My Wallet</Button
                >
              </Form>
            </Step>
          </Wizard>
        </Content>
      </Card>
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Footer />
    </svelte:fragment>
  </Template>
</Story>
