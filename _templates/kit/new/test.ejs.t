---
to: packages/<%= h.inflection.pluralize(type) %>/<%= h.inflection.dasherize(name) %>/<%= h.inflection.classify(name) %>.test.js
---

/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import <%= h.inflection.classify(name) %> from "./<%= h.inflection.classify(name) %>.svelte";

test("Component renders", () => {
  const results = render(<%= h.inflection.classify(name) %>, {});
  expect(() => results.toHaveClass("duk-<%= h.inflection.dasherize(name) %>"));
});