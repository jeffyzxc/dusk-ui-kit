<script>
  import RichText from "../RichText.svelte";

  export let size;

  const paragraph = "This is regular paragraph text.";
  const italic = "_This is an italic text_";
  const strong = "**This is a strong text**";
  const heading_1 = "# This is a heading (level 1)";
  const heading_2 = "## This is a heading (level 2)";
  const heading_3 = "### This is a heading (level 3)";
  const heading_4 = "#### This is a heading (level 4)";
</script>

<RichText size="{size}" markdown="{paragraph}" />
<RichText size="{size}" markdown="{italic}" />
<RichText size="{size}" markdown="{strong}" />
<RichText size="{size}" markdown="{heading_1}" />
<RichText size="{size}" markdown="{heading_2}" />
<RichText size="{size}" markdown="{heading_3}" />
<RichText size="{size}" markdown="{heading_4}" />
