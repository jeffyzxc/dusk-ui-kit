<script>
  import RichText from "../RichText.svelte";
  const richText = "_This is an italic text_";
  const richText2 = "**This is a strong text**";
</script>

<RichText content="{richText}" />
<RichText content="{richText2}" />
