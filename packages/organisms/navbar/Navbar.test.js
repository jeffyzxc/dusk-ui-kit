/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Navbar from "./Navbar.svelte";
// import { Basic } from "./Navbar.stories";

// test("shows proper list item", () => {
//   const results = render(Navbar, { props: Basic.args });
//   () => results.getAllByRole(Navbar).toHaveClass;
// });
test("it renders", () => {
  const results = render(Navbar, {
    props: {
      apps: [],
      links: [],
    },
  });
  expect(() => results.toHaveClass("duk-navbar"));
});
