/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeroProps {}

export default class Hero extends SvelteComponentTyped<
  HeroProps,
  {},
  { cta: {}; image: {}; introduction: {} }
> {}
