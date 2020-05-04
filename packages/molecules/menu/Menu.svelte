<script>
  import { setContext, getContext, onMount, afterUpdate } from "svelte";
  import { current_component } from "svelte/internal";
  import { watchResize } from "svelte-watch-resize";
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
    contexts,
    orientations,
    variants,
    icons
  } from "@dusk/helpers";
  import Icon from "@dusk/icon";
  import "./styles.css";

  let className = "";
  export { className as class };
  export let use = [];
  export let name = null;
  export let orientation = orientations.MENU.VERTICAL;
  export let variant = null;
  export let carousel = false;
  export let scrollBy = 1;

  let container;
  let paginationFactor;
  let items = [];
  let offset = 0;
  let isAtEnd = false;
  let itemWidth;
  let currentItemIndex = 0;

  $:isAtStart = currentItemIndex === 0;

  const forwardEvents = forwardEventsBuilder(current_component);
  const context = getContext("DUK:menu:context");

  $:totalPaginationPixels = scrollBy * paginationFactor;

  setContext("DUK:list:context", contexts.LIST.MENU);

  onMount(async () => {
    items = container.firstChild.children;
    setIsAtEnd();
  });

  function setIsAtEnd() {
    const itemsLength = items ? items.length : 0;
    isAtEnd = offset <= paginationFactor * (itemsLength - scrollBy) * -1;
  }

  function getClassNames(variant, orientation, context, carousel) {
    let classNames = "";
    switch (variant) {
      case variants.MOLECULE.MENU.BRAND:
        classNames += " duk-menu--brand";
        break;
      case variants.MOLECULE.MENU.CTA:
        classNames += " duk-menu--cta";
        break;
      case variants.MOLECULE.MENU.INFO:
        classNames += " duk-menu--info";
        break;
      case variants.MOLECULE.MENU.SUCCESS:
        classNames += " duk-menu--success";
        break;
      case variants.MOLECULE.MENU.WARNING:
        classNames += " duk-menu--warning";
        break;
      case variants.MOLECULE.MENU.DANGER:
        classNames += " duk-menu--danger";
        break;
      case variants.MOLECULE.MENU.LIGHT:
        classNames += " duk-menu--light";
        break;
      case variants.MOLECULE.MENU.DARK:
        classNames += " duk-menu--dark";
        break;
      case variants.MOLECULE.MENU.BLACK:
        classNames += " duk-menu--black";
        break;
      case variants.MOLECULE.MENU.WHITE:
        classNames += " duk-menu--white";
        break;
      default:
        classNames += "";
    }

    switch (context) {
      case contexts.MENU.NAVBAR:
        classNames += " duk-navbar__menu duk-navbar__menu--hidden";
        break;
      case contexts.MENU.DRAWER:
        classNames += " duk-drawer__menu";
        break;
      default:
        classNames += "";
    }

    switch (orientation) {
      case orientations.MENU.HORIZONTAL:
        classNames += " duk-menu--horizontal";
        break;
      case orientations.MENU.VERTICAL:
        classNames += " duk-menu--vertical";
        break;
      default:
        classNames += ""
    }

    if (carousel) classNames += " duk-menu--carousel";

    return classNames;
  }

  function getId(context) {
    let id = "";
    switch (context) {
      case contexts.MENU.NAVBAR:
        id = "__DUK-navbar-menu";
        break;
      default:
        id = "";
    }

    return id;
  }

  function setPaginationFactor(node) {
    node = container;
    paginationFactor = node.children.item(0).children.item(currentItemIndex).clientWidth;
  }

  const move = direction => {
    if (direction > 0 && !isAtEnd) {
      const newOffset = offset - totalPaginationPixels;
      offset -= totalPaginationPixels;
      currentItemIndex++;
    } else if (direction < 0 && !isAtStart) {
      offset += totalPaginationPixels;
      if (currentItemIndex != 0) currentItemIndex--;
    }
    setPaginationFactor();
    setIsAtEnd();
  };
</script>

<nav
  use:useActions="{use}"
  use:forwardEvents
  class="duk-menu {className}
  {getClassNames(variant, orientation, context, carousel)}"
  id="{getId(context)}"
  role="navigation"
  aria-label="{name || ''}"
  {...exclude($$props, ['use', 'class', 'orientation', 'name', 'variant', 'carousel'])}>
  {#if carousel}
    <Icon class="duk-menu--carousel__icon duk-menu--carousel__icon--prev" href="javascript:;" disabled="{isAtStart}" on:click="{() => move(-1)}" name="{icons.ARROW_LEFT_CIRCLE}" />
    <Icon class="duk-menu--carousel__icon duk-menu--carousel__icon--next" href="javascript:;" disabled="{isAtEnd}" on:click="{() => move(1)}" name="{icons.ARROW_RIGHT_CIRCLE}" />
  {/if}
  {#if items}
    <div bind:this="{container}" use:watchResize={setPaginationFactor} style="transform: translateX({offset}px);">
      <slot />
    </div>
    <!-- <div class="details">
      index: {currentItemIndex}<br>
      paginationFactor: {paginationFactor}<br>
      offset: {offset}px<br>
      atStart: {isAtStart}<br>
      atEnd: {isAtEnd}
    </div> -->
  {/if}
</nav>
