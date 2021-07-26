/**
 * Taken directly from https://github.com/hperrin/svelte-material-ui/blob/3096ffc184f9a77926e60abe47f53129c1b2c41a/packages/common/forwardEventsBuilder.js
 * 🙏
 * @author Hunter Perrin
 */

export function exclude(obj, keys) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const cashIndex = name.indexOf("$");
    if (cashIndex !== -1 && keys.indexOf(name.substring(0, cashIndex + 1)) !== -1) {
      continue;
    }
    if (keys.indexOf(name) !== -1) {
      continue;
    }
    newObj[name] = obj[name];
  }

  return newObj;
}
