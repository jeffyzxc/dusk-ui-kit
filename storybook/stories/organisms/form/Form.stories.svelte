<script>
  // TODO Investigate use of states on DropDown, and Toggle
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { types } from "@dusk-network/helpers";
  import Button from "@dusk-network/button";
  import PasswordStrength from "@dusk-network/password-strength";
  import Control from "@dusk-network/control";
  import TextField from "@dusk-network/text-field";
  import Toggle, { Group } from "@dusk-network/toggle";
  import FileUpload from "@dusk-network/file-upload";
  import Form from "@dusk-network/form";
  import * as yup from "yup";

  let schema = yup.object().shape({
    first_name: yup.string().required().max(30).label("First name"),
    last_name: yup.string().required().max(30).label("Last name"),
    email: yup.string().required().email().label("Email address"),
    password: yup
      .string()
      .required()
      .label("Password")
      .test("password-strength", "Password is not strong enough", function () {
        return passwordStrength > 2;
      }),
    password_confirmation: yup
      .string()
      .required()
      .label("Password confirmation")
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
    services_option: yup.string().required().label("We're testing form stuff so this"),
    marketing_email: yup.boolean().label("Marketing options"),
    terms: yup
      .boolean()
      .required()
      .oneOf([true], "You must agree to the terms and conditions agreement"),
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
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    services_option: "",
    marketing_email: false,
    terms: false,
    file: null,
  };

  let passwordStrength;
  let submitted = false;
  let uploaded = false;

  function formSubmit() {
    submitted = true;
    if (schema.isValidSync(fields)) {
      uploaded = true;
      submitted = false;
      alert("submit form");
    } else {
      uploaded = false;
    }
  }
</script>

<Meta
  title="Components/Organisms/Form"
  parameters="{{ layout: 'centered' }}"
  component="{Control}"
  argTypes="{{
    type: {
      control: {
        type: 'radio',
        options: Object.values(types.CONTROL),
      },
    },
  }}"
/>

<Template let:args>
  <Form
    class="sb-example"
    submitted="{submitted}"
    schema="{schema}"
    fields="{fields}"
    submitHandler="{formSubmit}"
  >
    <Control {...args} width="half" label="First name" name="first_name" let:id let:state>
      <TextField
        type="text"
        placeholder="Elon"
        id="{id}"
        state="{state}"
        bind:value="{fields.first_name}"
      />
    </Control>
    <Control {...args} width="half" label="Last name" name="last_name" let:id let:state>
      <TextField
        type="text"
        placeholder="Dusk"
        id="{id}"
        state="{state}"
        bind:value="{fields.last_name}"
      />
    </Control>
    <Control {...args} width="full" label="Email" name="email" let:id let:state>
      <TextField type="email" id="{id}" state="{state}" bind:value="{fields.email}" />
    </Control>
    <Control {...args} width="half" label="Password" name="password" let:id let:state>
      <TextField type="password" state="{state}" bind:value="{fields.password}" id="{id}" />
    </Control>
    <Control
      {...args}
      width="half"
      label="Confirm password"
      name="password_confirmation"
      let:id
      let:state
    >
      <TextField
        type="password"
        state="{state}"
        name="password_confirmation"
        bind:value="{fields.password_confirmation}"
        id="{id}"
      />
    </Control>
    <Control {...args} width="full" let:id>
      <PasswordStrength
        id="{id}"
        password="{fields.password}"
        on:strength="{(event) => {
          passwordStrength = event.detail;
        }}"
      >
        <strong>Password Level:</strong>
      </PasswordStrength>
    </Control>
    <Control
      {...args}
      width="full"
      let:state
      label="How do you intend to use our services?"
      group="{true}"
      name="services_option"
    >
      <Group>
        <Toggle
          type="radio"
          variant="{state}"
          name="services_option"
          value="trading"
          bind:group="{fields.services_option}">Trading</Toggle
        >
        <Toggle
          type="radio"
          variant="{state}"
          name="services_option"
          value="staking"
          bind:group="{fields.services_option}">Staking</Toggle
        >
        <Toggle
          type="radio"
          variant="{state}"
          name="services_option"
          value="hodl"
          bind:group="{fields.services_option}">HODL</Toggle
        >
        <Toggle
          type="radio"
          variant="{state}"
          name="services_option"
          value="other"
          bind:group="{fields.services_option}">Other</Toggle
        >
      </Group>
    </Control>
    <Control {...args} width="full" name="file" let:id let:state>
      <FileUpload
        id="{id}"
        state="{state}"
        uploaded="{uploaded}"
        {...args}
        on:inputFile="{(event) => (fields.file = event.detail.file)}"
      />
    </Control>
    <Control {...args} width="full" let:id let:state name="marketing_email">
      <Toggle
        type="checkbox"
        variant="{state}"
        name="marketing_email"
        id="{id}"
        bind:value="{fields.marketing_email}"
      >
        I would like to receive marketing emails from Dusk Network and affiliated partners.
      </Toggle>
    </Control>
    <Control {...args} width="full" let:id let:state name="terms">
      <Toggle type="checkbox" variant="{state}" name="terms" id="{id}" bind:value="{fields.terms}">
        I agree to the terms and conditions and all that good stuff.
      </Toggle>
    </Control>
    <Control width="full">
      <Button type="submit" size="lg">Submit</Button>
    </Control>
  </Form>
</Template>

<Story name="Standard form" args="{{}}" />
