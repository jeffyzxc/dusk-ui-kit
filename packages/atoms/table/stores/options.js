import { writable } from "svelte/store";

const DEFAULT_SORTABLE = true;
const DEFAULT_PAGINATION = true;
const DEFAULT_ROWS_PER_PAGE = 50;

const createOptions = () => {
  const { subscribe, set } = writable({
    sortable: DEFAULT_SORTABLE,
    pagination: DEFAULT_PAGINATION,
    rowPerPage: DEFAULT_ROWS_PER_PAGE,
  });
  return {
    subscribe,
    set,
    get: () => {
      let $store;
      options.subscribe((store) => ($store = store));
      return $store;
    },
    update: (opt) => {
      const parsed = {
        sortable: typeof opt.sortable === "boolean" ? opt.sortable : DEFAULT_SORTABLE,
        pagination: typeof opt.pagination === "boolean" ? opt.pagination : DEFAULT_PAGINATION,
        rowPerPage: typeof opt.rowPerPage === "number" ? opt.rowPerPage : DEFAULT_ROWS_PER_PAGE,
      };
      options.set(parsed);
    },
  };
};
export const options = createOptions();
