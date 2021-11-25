<script>
  import "./styles.css";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime.js";
  import customParseFormat from "dayjs/plugin/customParseFormat.js";

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

  dayjs.extend(relativeTime);
  dayjs.extend(customParseFormat);
</script>

<time class="{$$props.class || ''} duk-date-text" datetime="{time}" title="{time}">
  {dayjs(time, datetimeFormat).fromNow()}
  {#if showTimestamp}
    <time>({dayjs(time, datetimeFormat).format(TIMESTAMP_FORMAT)})</time>
  {/if}
</time>
