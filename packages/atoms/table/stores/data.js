import { writable, derived } from "svelte/store";
import { options } from "svelte-simple-datatables/src/stores/options.js";
import { pageNumber, rowCount } from "svelte-simple-datatables/src/stores/state.js";
import { globalFilters, localFilters } from "svelte-simple-datatables/src/stores/filters.js";

const createData = () => {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    set,
    sortAsc: (key) =>
      update((store) => {
        try {
          store.sort((a, b) => key(b).localeCompare(key(a)));
        } catch (e) {
          return store.sort((a, b) => parseFloat(key(b)) - parseFloat(key(a)));
        }
        return store.sort((a, b) => key(b).localeCompare(key(a)));
      }),
    sortDesc: (key) =>
      update((store) => {
        try {
          store.sort((a, b) => key(a).localeCompare(key(b)));
        } catch (e) {
          return store.sort((a, b) => parseFloat(key(a)) - parseFloat(key(b)));
        }
        return store.sort((a, b) => key(a).localeCompare(key(b)));
      }),
  };
};
export const data = createData();

export const filtered = derived(
  [data, globalFilters, localFilters],
  ([$data, $globalFilters, $localFilters]) => {
    if ($globalFilters) {
      $data = $data.filter((item) => {
        return Object.keys(item).some((k) => {
          return (
            item[k].toString().toLowerCase().indexOf($globalFilters.toString().toLowerCase()) > -1
          );
        });
      });
    }
    console.log($localFilters);
    if ($localFilters.length > 0) {
      $localFilters.forEach((filter) => {
        return ($data = $data.filter(
          (item) =>
            filter
              .key(item)
              .toString()
              .toLowerCase()
              .indexOf(filter.value.toString().toLowerCase()) > -1,
        ));
      });
    }
    rowCount.set($data.length);
    return $data;
  },
);

export const rows = derived(
  [filtered, options, pageNumber],
  ([$filtered, $options, $pageNumber]) => {
    if (!$options.pagination) {
      return $filtered;
    }
    return $filtered.slice(
      ($pageNumber - 1) * $options.rowPerPage,
      $pageNumber * $options.rowPerPage,
    );
  },
);
