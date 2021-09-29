import { writable, derived } from "svelte/store";

function createTokens() {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    update,
    set,
    reset: () => set([]),
  };
}

export const store = createTokens();
export const searchTerm = writable("");

export const searchResults = derived([store, searchTerm], ([$store, $searchTerm]) => {
  return $store.filter((item) => item.token.toLocaleLowerCase().indexOf($searchTerm) !== -1);
});
