import { writable } from "svelte/store";

const store = writable(1);

export const step = {
  subscribe: store.subscribe,
  increment: () => store.update((store) => store + 1),
  decrement: () => store.update((store) => store - 1),
  reset: () =>
    store.update((store) => {
      store = 0;
      return store;
    }),
};
