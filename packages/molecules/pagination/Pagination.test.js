/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Pagination from "./Pagination.svelte";
import { data } from "../../../storybook/stories/organisms/table/data";
import { pageNumber } from "../../organisms/table/stores/state";

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
