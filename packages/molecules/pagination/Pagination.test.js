/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Pagination from "./Pagination.svelte";
import { data } from "../../../storybook/stories/organisms/table/data";
import { writable } from "svelte/store";

const pageNumber = writable(1);

test("Component renders", () => {
  const results = render(Pagination, {
    props: {
      items: data,
      itemsPerPage: 10,
      pageNumber: pageNumber,
    },
  });
  expect(() => results.toHaveClass("duk-pagination"));
});
