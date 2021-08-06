import { writable } from "svelte/store";
import { options } from "./options.js";
import { data } from "./data.js";
import { pageNumber } from "./state.js";
import { localFilter } from "./filters.js";

const SORTABLE_CLASS = "duk-table__datum--sortable";
const SORTED_ASCENDING_CLASS = "duk-table__datum--sorted-asc";
const SORTED_DESCENDING_CLASS = "duk-table__datum--sorted-desc";

const createColumns = () => {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    set,
    update,
    get: () => {
      let $columns;
      columns.subscribe((store) => ($columns = store));
      return $columns;
    },
    sort: (element, key) => {
      if (options.get().sortable !== true || typeof key === "undefined") {
        return;
      }
      if (
        element.classList.contains(SORTABLE_CLASS) &&
        element.classList.contains(SORTED_ASCENDING_CLASS)
      ) {
        Array.from(element.parentNode.children).forEach((item) =>
          item.classList.remove(SORTED_ASCENDING_CLASS, SORTED_DESCENDING_CLASS),
        );
        element.classList.add(SORTED_DESCENDING_CLASS);
        data.sortDesc(key);
        pageNumber.set(1);
      } else {
        Array.from(element.parentNode.children).forEach((item) =>
          item.classList.remove(SORTED_DESCENDING_CLASS, SORTED_ASCENDING_CLASS),
        );
        element.classList.add(SORTED_ASCENDING_CLASS);
        data.sortAsc(key);
        pageNumber.set(1);
      }
    },
    filter: (key, value) => {
      pageNumber.set(1);
      localFilter.add(key, value);
    },
  };
};
export const columns = createColumns();
