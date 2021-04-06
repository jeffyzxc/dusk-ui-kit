# ⚛️ Rich-text

Rich text is more exciting than plain text. It supports text formatting, such as bold, italics, and underlining, as well as different fonts, font sizes, and colored text.

## Size

Can be adjusted as a font-size.

## Usage

```js
<script>
  import RichText from "@dusk-network/rich-text";
  const richText = "_This is an italic text_";
  const richText2 = "**This is a strong text**";
</script>
// RichText is using a library 'marked' to style the text.
<div style="background-color:lightgrey;max-width:400px;margin:0 auto;text-align:center;">
  <RichText content="{richText}" />
  <RichText content="{richText2}" />
</div>
```