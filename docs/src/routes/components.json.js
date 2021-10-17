import metadata from "@ui-kit-meta";

export async function get() {
  return {
    body: metadata,
  };
}
