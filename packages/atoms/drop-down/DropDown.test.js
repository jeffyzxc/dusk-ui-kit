import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import { Basic } from "./DropDown.stories";
import DropDown from "@dusk-network/drop-down";

test("it renders", () => {
  const results = render(DropDown, {
    props: Basic.args,
  });
  expect(() => results.getByRole(DropDown).toHaveClass);
});
