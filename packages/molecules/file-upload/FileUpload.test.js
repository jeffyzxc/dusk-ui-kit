/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import FileUpload from "./FileUpload.svelte";

test("it renders", () => {
  const results = render(FileUpload);
  expect(() => results.toHaveClass("duk-file-upload"));
});
