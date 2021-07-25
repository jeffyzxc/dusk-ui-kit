/**
 * Taken directly from https://github.com/hperrin/svelte-material-ui/blob/3096ffc184f9a77926e60abe47f53129c1b2c41a/packages/common/forwardEventsBuilder.js
 * 🙏
 * @author Hunter Perrin
 */

export function prefixFilter(obj, prefix) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.substring(0, prefix.length) === prefix) {
      newObj[name.substring(prefix.length)] = obj[name];
    }
  }

  return newObj;
}
