import Base, { internals } from "@dusk/elements/Base";

export function baseBuilder(props) {
  function Component(...args) {
    Object.assign(internals, props);
    return new Base(...args);
  }

  Component.prototype = Base;

  // SSR support
  if (Base.$$render) {
    Component.$$render = (...args) =>
      Object.assign(internals, props) && Base.$$render(...args);
  }
  if (Base.render) {
    Component.render = (...args) =>
      Object.assign(internals, props) && Base.render(...args);
  }

  return Component;
}
