<script>
  import { useActions, forwardEvents } from "svelte";
  import { exclude, variants } from "@dusk/helpers";
  import "./styles.css";

  let className = "";
  export { className as class };
  export let variant = variants.MOLECULE.CONTROL.WARNING;
  export let use = [];

  function getClassNames(variant) {
    let classNames = "";
    switch (variant) {
      case variants.MOLECULE.CONTROL.BRAND:
        classNames += " duk-control--brand";
        break;
      case variants.MOLECULE.CONTROL.CTA:
        classNames += " duk-control--cta";
        break;
      case variants.MOLECULE.CONTROL.INFO:
        classNames += " duk-control--info";
        break;
      case variants.MOLECULE.CONTROL.SUCCESS:
        classNames += " duk-control--success";
        break;
      case variants.MOLECULE.CONTROL.WARNING:
        classNames += " duk-control--warning";
        break;
      case variants.MOLECULE.CONTROL.DANGER:
        classNames += " duk-control--danger";
        break;
      default:
        classNames += "";
    }

    return classNames;
  }
</script>

<div
  use:useActions="{use}"
  use:forwardEvents
  class="duk-control {className}
  {getClassNames(variant)}
  "
  {...exclude($$props, ['use', 'class'])}>
  <p>coming soon</p>
</div>
