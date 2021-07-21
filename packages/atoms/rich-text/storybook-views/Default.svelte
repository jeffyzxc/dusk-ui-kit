<script>
  import RichText from "../RichText.svelte";
  const paragraph = "This is regular paragraph text.";
  const italic = "_This is an italic text_";
  const strong = "**This is a strong text**";
  const heading_1 = "# This is a heading (level 1)";
  const heading_2 = "## This is a heading (level 2)";
  const heading_3 = "### This is a heading (level 3)";
  const heading_4 = "#### This is a heading (level 4)";
  const heading_5 = "##### This is a heading (level 5)";
  const heading_6 = "###### This is a heading (level 6)";
</script>

<RichText markdown="{paragraph}" />
<RichText markdown="{italic}" />
<RichText markdown="{strong}" />
<RichText markdown="{heading_1}" />
<RichText markdown="{heading_2}" />
<RichText markdown="{heading_3}" />
<RichText markdown="{heading_4}" />
<RichText markdown="{heading_5}" />
<RichText markdown="{heading_6}" />
