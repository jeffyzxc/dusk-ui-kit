import { localStore } from "./stores/local";

export const theme = localStore("theme", "dark");
export const settings = localStore("show", false);
