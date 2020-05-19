function ripple(variant) {
  return function(event) {
    const target = event.currentTarget;
    const circle = document.createElement("span");
    const d = Math.max(target.clientWidth, target.clientHeight);

    const removeCircle = () => {
      circle.remove();
      circle.removeEventListener("animationend", removeCircle);
    };

    circle.addEventListener("animationend", removeCircle);
    circle.style.width = circle.style.height = `${d}px`;
    const rect = target.getBoundingClientRect();
    circle.style.left = `${event.clientX - rect.left - d / 2}px`;
    circle.style.top = `${event.clientY - rect.top - d / 2}px`;
    circle.classList.add("ripple", `ripple--${variant}`);

    target.appendChild(circle);
  };
}

export default function r(variant = "brand") {
  return function(node) {
    node.addEventListener("click", ripple(variant));
    return {
      onDestroy: () => node.removeEventListener("click"),
    };
  };
}
