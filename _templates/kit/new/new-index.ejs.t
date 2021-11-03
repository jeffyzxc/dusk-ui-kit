---
to: packages/<%= h.inflection.pluralize(type) %>/<%= h.inflection.dasherize(name) %>/index.js

---
import <%= h.inflection.classify(name) %> from "./<%= h.inflection.classify(name) %>.svelte";

export default <%= h.inflection.classify(name) %>;


