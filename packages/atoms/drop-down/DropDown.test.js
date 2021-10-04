/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
//import { Basic } from "./DropDown.stories";
import DropDown from "./DropDown.svelte";

test("it renders", () => {
  const results = render(DropDown, {
    props: { options: ["option 1", "option 2", "option 3", "option 4", "option 5"] },
  });
  // expect(() => results.getByRole(DropDown).toHaveClass);

  //const element = document.createElement('div');
  expect(results).not.toBeNull();
});
