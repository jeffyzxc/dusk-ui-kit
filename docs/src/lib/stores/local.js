import { writable } from "svelte/store";

/**
 * @type {import('@svelte/store').Writeable}
 */
export function localStore(key, value) {
  const data = typeof localStorage != "undefined" ? localStorage.getItem(key) : null;
  const store = writable(value);
  if (data !== null) {
    store.set(data);
  }
  store.subscribe((val) => {
    if (typeof localStorage == "undefined") {
      return;
    }
    localStorage.setItem(key, val);
  });

  return store;
}
