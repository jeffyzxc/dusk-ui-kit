import { writable } from "svelte/store";

const createLocal = () => {
  const { subscribe, update, set } = writable([]);
  return {
    subscribe,
    update,
    add: (key, value) =>
      update((store) => {
        const filter = { key: key, value: value };
        store = store.filter((item) => {
          return item.key !== key && item.value.length > 0;
        });
        store.push(filter);
        return store;
      }),
    remove: () => set([]),
  };
};
export const localFilter = createLocal();

const createGlobal = () => {
  const { subscribe, update, set } = writable(null);
  return {
    subscribe,
    set: (value) =>
      update((store) => {
        store = value.length > 0 ? value : null;
        return store;
      }),
    remove: () => set(null),
  };
};
export const globalFilter = createGlobal();
