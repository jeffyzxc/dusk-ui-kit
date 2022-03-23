/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileUploadProps {
  /**
   * Sets the `id` of the FileUpload if set, otherwise the ID is generated.
   * @default "__DUK-file-upload" + Math.random().toString(36)
   */
  id?: string;

  /**
   * Sets the `name` attribute on the File Upload.
   * @default ""
   */
  name?: string;

  /**
   * Sets the uploaded state of the File Upload, must be initialized as false.
   * When true file input will be disabled.
   * @default false
   */
  uploaded?: boolean;
}

export default class FileUpload extends SvelteComponentTyped<
  FileUploadProps,
  {
    dragover: WindowEventMap["dragover"];
    dragenter: WindowEventMap["dragenter"];
    inputFile: CustomEvent<any>;
  },
  {}
> {}
