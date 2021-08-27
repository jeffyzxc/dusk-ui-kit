import { writable, derived } from "svelte/store";
import { shuffle } from "@dusk-network/helpers/array-utils.js";
// const createWords = () => {
//   const { subscribe, set } = writable();
//   return {
//     subscribe,
//     set,
//     shuffled: () => {
//       let $columns;
//       columns.subscribe((store) => ($columns = store));
//     }
//   };
// };

export const words = writable([]);
export const compared = writable([]);

// export const words = createWords();

export const shuffled = derived(words, ($words) => {
  const shuffled = [...$words];
  return shuffle(shuffled);
});
