/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
// import { Basic } from "./Table.stories";
import Table from "./Table.svelte";
import { data } from "../../../storybook/stories/organisms/table/data";
import ResizeObserver from "../../../__mocks__/ResizeObserver";

// test("shows proper label", () => {
//   const results = render(Table, { props: Basic.args });
//   expect(() => results.getAllByText("Col 1 Head")).not.toThrow();
// });
test("it renders", () => {
  const results = render(Table, {
    props: {
      data: data,
      settings: {
        sortable: true,
        rowPerPage: 10,
        pagination: true,
        limiter: true,
      },
    },
  });
  //expect(()=>results.toHaveClass('duk-table'));
  expect(results).not.toBeNull();
});
