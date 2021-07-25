/** Faster rounding function to avoid heavy use of Math.round  */
export function round(n) {
  return (n + 0.5) << 0;
}

export function getRect(element) {
  var el = element,
    rect = el.getBoundingClientRect();
  return {
    top: round(rect.top),
    left: round(rect.left),
    height: round(rect.bottom) - round(rect.top),
    width: round(rect.right) - round(rect.left),
  };
}

export function wrap(wrapper, elms) {
  if (!elms.length) {
    elms = [elms];
  }

  for (var i = elms.length - 1; i >= 0; i--) {
    var child = i > 0 ? wrapper.cloneNode(true) : wrapper;
    var el = elms[i];

    var parent = el.parentNode;
    var sibling = el.nextSibling;

    child.appendChild(el);

    if (sibling) {
      parent.insertBefore(child, sibling);
    } else {
      parent.appendChild(child);
    }
  }
}

export function wrapAll(wrapper, elms) {
  var el = elms.length ? elms[0] : elms,
    parent = el.parentNode,
    sibling = el.nextSibling;

  wrapper.appendChild(el);

  while (elms.length) {
    wrapper.appendChild(elms[0]);
  }

  if (sibling) {
    parent.insertBefore(wrapper, sibling);
  } else {
    parent.appendChild(wrapper);
  }
}
