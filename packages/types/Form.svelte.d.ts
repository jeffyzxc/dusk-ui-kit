/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FormProps {
  /**
   * Sets the function used for handling the submit event
   * @default undefined
   */
  submitHandler?: function;

  /**
   * Sets the schema used for validating the Form fields.
   * @default undefined
   */
  schema?: undefined;

  /**
   * Sets the object that holds all the input data from the Form fields.
   * @default undefined
   */
  fields?: undefined;

  /**
   * Used to keep track of Form submission.
   * @default undefined
   */
  submitted?: undefined;
}

export default class Form extends SvelteComponentTyped<
  FormProps,
  {},
  { default: {} }
> {}
