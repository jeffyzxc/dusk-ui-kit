<script>
  //TODO Use ES6 syntax more effectively
  import { getContext, createEventDispatcher } from "svelte";
  import contexts from "@dusk-network/helpers/contexts.js";
  import RichText from "@dusk-network/rich-text/RichText.svelte";
  import Icon from "@dusk-network/icon/Icon.svelte";
  import "./styles.css";

  /**
   * Sets the `id` of the FileUpload if set, otherwise the ID is generated.
   * @type {string}
   */
  export let id = "__DUK-file-upload" + Math.random().toString(36);

  /**
   * Sets the `name` attribute on the File Upload.
   */
  export let name = "";

  /**
   * Sets the uploaded state of the File Upload, must be initialized as false.
   * When true file input will be disabled.
   */
  export let uploaded = false;

  const dispatch = createEventDispatcher();
  const context = getContext("DUK:file-upload:context");

  let fields = {
    file: null,
  };
  let isFileLoaded = false;

  function dropFile(e) {
    fields.file = e.dataTransfer.files;
    isFileLoaded = true;
    dispatch("inputFile", fields);
  }

  function inputFile(e) {
    fields.file = e.target.files;
    isFileLoaded = true;
    dispatch("inputFile", fields);
  }
</script>

<div
  class="{$$props.class || ''} duk-file-upload duk-file-upload__dropzone"
  class:duk-file-upload--control="{context === contexts.FILE_UPLOAD.CONTROL}"
  class:duk-file-upload--form="{context === contexts.FILE_UPLOAD.FORM}"
  on:dragover|preventDefault
  on:dragenter|preventDefault
  on:drop|preventDefault="{dropFile}"
>
  <div class="duk-file-upload__layout">
    {#if !isFileLoaded && !uploaded}
      <RichText>
        <p class="duk-file-upload__text">
          Drag your file here
          <br />or<br />
          <span>Upload File</span>
        </p>
      </RichText>
    {/if}
    {#if isFileLoaded && !uploaded}
      <RichText>
        <p class="duk-file-upload__text">{fields.file[0].name}</p>
      </RichText>
    {/if}
    {#if isFileLoaded && uploaded}
      <Icon name="check-decagram-outline" size="xxxl" />
    {/if}
  </div>
  <input
    id="{id}"
    name="{name}"
    aria-describedby="{id}-message"
    class="duk-file-upload__input"
    type="file"
    disabled="{uploaded}"
    on:change="{inputFile}"
  />
</div>
