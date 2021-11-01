---
to: packages/<%=type%>/<%=name%>/<%=Name%>.test.js
---

/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import <%=Name%> from "./<%=Name%>.svelte";

test("Component renders", () => {
  const results = render(<%=Name%>, {});
  expect(() => results.toHaveClass("duk-<%=name%>"));
});