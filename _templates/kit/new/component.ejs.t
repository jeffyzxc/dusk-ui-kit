---
to: packages/<%= h.inflection.pluralize(type) %>/<%= h.inflection.dasherize(name) %>/<%= h.inflection.classify(name) %>.svelte
---
<script>
    import "./styles.css";
</script>
<div class="{$$props.class || ''} duk-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>">
</div>


