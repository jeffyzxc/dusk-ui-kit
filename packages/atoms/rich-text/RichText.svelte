<script>
  import * as marked from "marked";
  import "./styles.css";
  export let content;
</script>

<span class="rich-text">
  {@html marked(content)}
</span>
