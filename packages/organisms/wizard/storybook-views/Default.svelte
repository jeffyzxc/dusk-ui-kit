<script>
  import RichText from "@dusk-network/rich-text/RichText.svelte";
  import Button from "@dusk-network/button/Button.svelte";
  import Group from "@dusk-network/button/Group.svelte";
  import Wizard from "@dusk-network/wizard/Wizard.svelte";
  import Step from "@dusk-network/wizard/Step.svelte";

  const handleExit = () => {
    alert("The user wants to leave the wizard.");
  };
</script>

<Wizard stepCount="{3}" on:exit="{handleExit}">
  <Step number="{1}" let:next>
    <RichText>
      <p>First item content...</p>
    </RichText>
    <Group>
      <div>&nbsp;</div>
      <Button on:click="{next}">Go to step 2</Button>
    </Group>
  </Step>
  <Step number="{2}" let:previous let:next>
    <RichText><p>Second item content...</p></RichText>
    <Group>
      <Button on:click="{previous}">Go back to step 1</Button><Button on:click="{next}">
        Go to step 3
      </Button>
    </Group>
  </Step>
  <Step number="{3}" let:previous>
    <RichText><p>Third item content...</p></RichText>
    <Group>
      <Button on:click="{previous}">Go back to step 2</Button>
    </Group>
  </Step>
</Wizard>
