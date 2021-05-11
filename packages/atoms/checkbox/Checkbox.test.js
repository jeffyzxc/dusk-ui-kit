import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/svelte";
import { Basic } from "./Checkbox.stories";
import Checkbox from "./storybook-views/Default.svelte";

test("shows proper placeholder", () => {
  const results = render(Checkbox, { props: Basic.args });
  expect(() => results.getByText("Yo! I am a Checkbox")).not.toThrow();
});

test("shows proper label", () => {
  const results = render(Checkbox, { props: Basic.args });
  expect(() => results.getByLabelText("Yo! I am a Checkbox")).not.toThrow();
});

test("shows checked or not", () => {
  const results = render(Checkbox, { props: Basic.args });
  const firstBox = results.getAllByRole("checkbox", { checked: true });
  const secondBox = results.getByTestId("checkbox-result", { checked: true });

  //Used the [0] because it picked up the entire checkbox element and stored in an array so to access the aria-checked attribute it needs to be written this way.
  expect(firstBox[0]).toBeChecked();
  // Unlike the other situation, we picked up the checkbox by it's (data-testid) therefore, it's not in an array and could be accessed directly.
  expect(secondBox).not.toBeChecked();

  fireEvent.click("checkbox", "CheckboxResult");
  expect(firstBox[0]).toBeChecked();
  expect(secondBox).not.toBeChecked();
});