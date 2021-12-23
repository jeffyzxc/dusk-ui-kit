<script>
  import "./styles.css";
  import dayjs from "dayjs/esm/index.js";
  import relativeTime from "dayjs/esm/plugin/relativeTime/index.js";
  import customParseFormat from "dayjs/esm/plugin/customParseFormat/index.js";

  /**
   * The time string that needs to be formatted
   */
  export let time = "";

  /**
   * Show and additional timestamp after the formatted time.
   */
  export let showTimestamp = false;

  /**
   * The format of the time string.
   * */
  export let datetimeFormat = "YYYY-MM-DD HH:mm:ss ZZ";

  const TIMESTAMP_FORMAT = "MMM-DD-YYYY HH:mm:ss A ZZ";

  dayjs.extend(relativeTime).extend(customParseFormat);
</script>

<time class="{$$props.class || ''} duk-date-text" datetime="{time}" title="{time}">
  {dayjs(time, datetimeFormat).fromNow()}
  {#if showTimestamp}
    <time>({dayjs(time, datetimeFormat).format(TIMESTAMP_FORMAT)})</time>
  {/if}
</time>
