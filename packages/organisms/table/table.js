import { data } from "./stores/data.js";
import { columns } from "./stores/columns.js";
import { rows } from "./stores/rows.js";
import { tableWidth, pageNumber, activeRow } from "./stores/state.js";
import { globalFilter, localFilter } from "./stores/filters.js";

export const table = {
  init: () => {
    table.resize();
    table.getColumns();
    table.getRows();
    new ResizeObserver(() => {
      table.resize();
    }).observe(document.querySelector(".duk-table").parentElement);
  },
  reset: () => {
    pageNumber.set(1);
    activeRow.set(null);
    globalFilter.remove();
    localFilter.remove();
    columns.set([]);
    rows.set([]);
  },
  setRows: (arr) => {
    arr.forEach((item) => {
      Object.keys(item).forEach((k) => {
        if (item[k] === null) {
          item[k] = "";
        }
      });
    });
    data.set(arr);
    return;
  },
  getSize: () => {
    const parent = document.querySelector(".duk-table").parentNode;
    const style = getComputedStyle(parent);
    const rect = parent.getBoundingClientRect();
    const getNumber = (pxValue) => {
      return parseFloat(pxValue.replace("px", ""));
    };
    return {
      parentWidth: rect.width,
      parentHeight: rect.height,
      width:
        (rect.width -
          getNumber(style.paddingLeft) -
          getNumber(style.paddingRight) -
          getNumber(style.borderLeftWidth) -
          getNumber(style.borderRightWidth)) /
        rect.width,
      height:
        (rect.height -
          getNumber(style.paddingTop) -
          getNumber(style.paddingBottom) -
          getNumber(style.borderTopWidth) -
          getNumber(style.borderBottomWidth)) /
        rect.height,
      top: style.paddingTop,
      right: style.paddingRight,
      bottom: style.paddingBottom,
      left: style.paddingLeft,
    };
  },
  resize: () => {
    if (!document.querySelector(".duk-table")) return;
    const size = table.getSize();
    const tableContainer = document.querySelector(".duk-table__table");
    tableWidth.set(size.parentWidth * size.width);
    if (size.parentWidth * size.width < document.querySelector(".duk-table__table").offsetWidth) {
      tableContainer.style.overflowX = "auto";
    }
  },
  getColumns: () => {
    const columnList = [];
    let i = 0;
    document.querySelectorAll(".duk-table__table thead th").forEach((th) => {
      columnList.push({
        index: i,
        html: th.innerHTML,
        key: table.getKey(th.dataset.key),
        sort: null,
        classList: th.classList,
        minWidth: th.getBoundingClientRect().width,
      });
      th.addEventListener(
        "click",
        (e) => {
          columns.sort(e.currentTarget, table.getKey(th.dataset.key));
        },
        true,
      );
      i++;
    });
    columns.set(columnList);
  },
  getRows: () => {
    const rowList = [];
    let i = 0;
    document.querySelectorAll(".duk-table__table tbody tr").forEach((tr) => {
      rowList.push({
        index: i,
        classList: tr.classList,
      });
      tr.addEventListener(
        "click",
        (e) => {
          const row = e.currentTarget;
          if (row.classList.contains("duk-table__row--active")) {
            activeRow.set(null);
          } else {
            activeRow.set(row.id);
          }
        },
        true,
      );
      i++;
    });
    rows.set(rowList);
  },
  getKey: (key) => {
    if (!key) return;
    if (key && key.indexOf("=>") > 0) {
      return new Function(`'use strict';return (${key})`)();
    }
    return (x) => x[key];
  },
};