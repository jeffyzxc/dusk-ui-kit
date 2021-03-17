<script>
  import marked from "marked";
  import "./styles.css";
  export let content;
</script>

<span class="rich-text">
  {@html marked(content)}
</span>
