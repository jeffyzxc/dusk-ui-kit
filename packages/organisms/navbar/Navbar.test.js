/**
 * @jest-environment jsdom
 */
jest.mock("svelte-dark-mode", () => {
  return function () {
    return { DarkMode: () => {} };
  };
});
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Navbar from "./Navbar.svelte";
//import DarkMode from 'svelte-dark-mode/lib/index.mjs'
// import { Basic } from "./Navbar.stories";

// test("shows proper list item", () => {
//   const results = render(Navbar, { props: Basic.args });
//   () => results.getAllByRole(Navbar).toHaveClass;
// });

test("Component renders", () => {
  const results = render(Navbar, {
    props: {
      apps: [],
      links: [],
    },
  });
  expect(() => results.toHaveClass("duk-navbar"));
});
