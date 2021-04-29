import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import { Basic } from "./Table.stories";
import Tabel from "./storybook-views/Default.svelte";

test("shows proper label", () => {
  const results = render(Tabel, { props: Basic.args });
  expect(() => results.getAllByText("Col 1 Head")).not.toThrow();
});
