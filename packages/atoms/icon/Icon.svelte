<script>
  import { getContext } from "svelte";
  import { current_component } from "svelte/internal";
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
    contexts,
    variants,
    icons,
    sizes
  } from "@dusk/helpers";
  import "./styles.css";
  import { Div, A } from "@dusk/elements";

  import ArrowLeftCircle from "./icons/ArrowLeftCircle.svelte";
  import ArrowRightCircle from "./icons/ArrowRightCircle.svelte";
  import Brightness4 from "./icons/Brightness4.svelte";
  import Decimal from "./icons/Decimal.svelte";
  import AlertOutline from "./icons/AlertOutline.svelte";
  import CardSearchOutline from "./icons/CardSearchOutline.svelte";
  import ChartLineVariant from "./icons/ChartLineVariant.svelte";
  import CheckboxBlankCircle from "./icons/CheckboxBlankCircle.svelte";
  import CheckCircleOutline from "./icons/CheckCircleOutline.svelte";
  import CogOutline from "./icons/CogOutline.svelte";
  import ContentCopy from "./icons/ContentCopy.svelte";
  import CloseCircleOutline from "./icons/CloseCircleOutline.svelte";
  import DuskTicker from "./icons/DuskTicker.svelte";
  import Earth from "./icons/Earth.svelte";
  import EmailOutline from "./icons/EmailOutline.svelte";
  import EmailSendOutline from "./icons/EmailSendOutline.svelte";
  import EyeSettingsOutline from "./icons/EyeSettingsOutline.svelte";
  import EyeOutline from "./icons/EyeOutline.svelte";
  import FileExportOutline from "./icons/FileExportOutline.svelte";
  import FolderDownloadOutline from "./icons/FolderDownloadOutline.svelte";
  import FolderUploadOutline from "./icons/FolderUploadOutline.svelte";
  import FolderOutline from "./icons/FolderOutline.svelte";
  import FolderOpenOutline from "./icons/FolderOpenOutline.svelte";
  import FolderSearchOutline from "./icons/FolderSearchOutline.svelte";
  import HelpCircleOutline from "./icons/HelpCircleOutline.svelte";
  import KeyOutline from "./icons/KeyOutline.svelte";
  import Magnify from "./icons/Magnify.svelte";
  import MenuBurger from "./icons/MenuBurger.svelte";
  import MenuBurgerClose from "./icons/MenuBurgerClose.svelte";
  import MinusCircleOutline from "./icons/MinusCircleOutline.svelte";
  import Refresh from "./icons/Refresh.svelte";
  import ShareVariant from "./icons/ShareVariant.svelte";
  import StoreOutline from "./icons/StoreOutline.svelte";
  import TrashCanOutline from "./icons/TrashCanOutline.svelte";
  import ViewDashboardOutline from "./icons/ViewDashboardOutline.svelte";
  import Wallet from "./icons/Wallet.svelte";
  import WalletPlus from "./icons/WalletPlus.svelte";

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];

  let className = "";
  export { className as class };

  export let name = null;
  export let href = null;
  export let size = sizes.ATOM.ICON.BASE;
  export let viewbox = "0 0 24 24";
  export let wrapper = href == null ? Div : A;
  export let variant = null;

  let context = getContext("DUK:icon:context");

  function getClassNames(variant, size, context) {
    let classNames = "";
    switch (variant) {
      case variants.ATOM.ICON.BRAND:
        classNames += " duk-icon--brand";
        break;
      case variants.ATOM.ICON.INFO:
        classNames += " duk-icon--info";
        break;
      case variants.ATOM.ICON.SUCCESS:
        classNames += " duk-icon--success";
        break;
      case variants.ATOM.ICON.WARNING:
        classNames += " duk-icon--warning";
        break;
      case variants.ATOM.ICON.DANGER:
        classNames += " duk-icon--danger";
        break;
      case variants.ATOM.ICON.LIGHT:
        classNames += " duk-icon--light";
        break;
      case variants.ATOM.ICON.DARK:
        classNames += " duk-icon--dark";
        break;
      case variants.ATOM.ICON.WHITE:
        classNames += " duk-icon--white";
        break;
      case variants.ATOM.ICON.BLACK:
        classNames += " duk-icon--black";
        break;
      default:
        classNames += "";
    }
    switch (size) {
      case sizes.ATOM.ICON.SMALL:
        classNames += " duk-icon--small";
        break;
      case sizes.ATOM.ICON.LARGE:
        classNames += " duk-icon--large";
        break;
      default:
        classNames += "";
    }
    switch (context) {
      case contexts.ICON.BUTTON:
        classNames += " duk-button__icon";
        break;
      case contexts.ICON.LIST:
        classNames += " duk-list__icon";
        break;
      default:
        classNames += "";
    }

    return classNames;
  }

  function getSelectedIcon(name) {
    let selectedIcon;
    switch (name) {
      case icons.ALERT_OUTLINE:
        selectedIcon = AlertOutline;
        break;
      case icons.BRIGHTNESS_4:
        selectedIcon = Brightness4;
        break;
      case icons.ARROW_LEFT_CIRCLE:
        selectedIcon = ArrowLeftCircle;
        break;
      case icons.ARROW_RIGHT_CIRCLE:
        selectedIcon = ArrowRightCircle;
        break;
      case icons.CARD_SEARCH_OUTLINE:
        selectedIcon = CardSearchOutline;
        break;
      case icons.CLOSE_CIRCLE_OUTLINE:
        selectedIcon = CloseCircleOutline;
        break;
      case icons.CHART_LINE_VARIANT:
        selectedIcon = ChartLineVariant;
        break;
      case icons.CHECKBOX_BLANK_CIRCLE:
        selectedIcon = CheckboxBlankCircle;
        break;
      case icons.CHECK_CIRCLE_OUTLINE:
        selectedIcon = CheckCircleOutline;
        break;
      case icons.CONTENT_COPY:
        selectedIcon = ContentCopy;
        break;
      case icons.COG_OUTLINE:
        selectedIcon = CogOutline;
        break;
      case icons.DECIMAL:
        selectedIcon = Decimal;
        break;
      case icons.DUSK_TICKER:
        selectedIcon = DuskTicker;
        break;
      case icons.EARTH:
        selectedIcon = Earth;
        break;
      case icons.EMAIL_OUTLINE:
        selectedIcon = EmailOutline;
        break;
      case icons.EMAIL_SEND_OUTLINE:
        selectedIcon = EmailSendOutline;
        break;
      case icons.EYE_SETTINGS_OUTLINE:
        selectedIcon = EyeSettingsOutline;
        break;
      case icons.EYE_OUTLINE:
        selectedIcon = EyeOutline;
        break;
      case icons.FILE_EXPORT_OUTLINE:
        selectedIcon = FileExportOutline;
        break;
      case icons.FOLDER_OPEN_OUTLINE:
        selectedIcon = FolderOpenOutline;
        break;
      case icons.FOLDER_OUTLINE:
        selectedIcon = FolderOutline;
        break;
      case icons.FOLDER_DOWNLOAD_OUTLINE:
        selectedIcon = FolderDownloadOutline;
        break;
      case icons.FOLDER_UPLOAD_OUTLINE:
        selectedIcon = FolderUploadOutline;
        break;
      case icons.FOLDER_SEARCH_OUTLINE:
        selectedIcon = FolderSearchOutline;
        break;
      case icons.HELP_CIRCLE_OUTLINE:
        selectedIcon = HelpCircleOutline;
        break;
      case icons.KEY_OUTLINE:
        selectedIcon = KeyOutline;
        break;
      case icons.MAGNIFY:
        selectedIcon = Magnify;
        break;
      case icons.MENU_BURGER:
        selectedIcon = MenuBurger;
        break;
      case icons.MENU_BURGER_CLOSE:
        selectedIcon = MenuBurgerClose;
        break;
      case icons.MINUS_CIRCLE_OUTLINE:
        selectedIcon = MinusCircleOutline;
        break;
      case icons.REFRESH:
        selectedIcon = Refresh;
        break;
      case icons.SHARE_VARIANT:
        selectedIcon = ShareVariant;
        break;
      case icons.STORE_OUTLINE:
        selectedIcon = StoreOutline;
        break;
      case icons.TRASH_CAN_OUTLINE:
        selectedIcon = TrashCanOutline;
        break;
      case icons.VIEW_DASHBOARD_OUTLINE:
        selectedIcon = ViewDashboardOutline;
        break;
      case icons.WALLET:
        selectedIcon = Wallet;
        break;
      case icons.WALLET_PLUS:
        selectedIcon = WalletPlus;
        break;
      default:
        selectedIcon = null;
    }

    return selectedIcon;
  }
</script>

<svelte:component
  this="{wrapper}"
  use="{[forwardEvents, ...use]}"
  class="duk-icon {className}
  {getClassNames(variant, size, context)}"
  {...exclude($$props, ['use', 'class', 'variant', 'href', 'name', 'size'])}>
  <svelte:component this="{getSelectedIcon(name)}" {viewbox} />
</svelte:component>
