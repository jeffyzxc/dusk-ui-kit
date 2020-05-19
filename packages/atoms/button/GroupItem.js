export default function GroupItem(node) {
  node.classList.add("duk-button__group__item");

  return {
    destroy() {
      node.classList.remove("duk-button__group__item");
    },
  };
}
