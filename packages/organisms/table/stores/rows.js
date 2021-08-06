import { writable } from "svelte/store";

const createRows = () => {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    set,
    update,
    get: () => {
      let $rows;
      rows.subscribe((store) => ($rows = store));
      return $rows;
    },
  };
};

export const rows = createRows();
