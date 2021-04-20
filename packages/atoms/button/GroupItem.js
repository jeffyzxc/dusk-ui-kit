const className = "duk-button__group__item";

export default function GroupItem(node) {
  node.classList.add(className);

  return {
    destroy() {
      node.classList.remove(className);
    },
  };
}
