import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import Navbar from "./storybook-views/Default.svelte";
import { Basic } from "./Navbar.stories";

test("shows proper list item", () => {
  const results = render(Navbar, { props: Basic.args });
  () => results.getAllByRole(Navbar).toHaveClass;
});
