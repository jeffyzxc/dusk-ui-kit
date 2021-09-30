import dusk from "@dusk-network/styles/plugin/index.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    target: "#dusk",
    vite: () => ({
      plugins: [
        dusk({
          cssPath: "./node_modules/@dusk-network/styles/tailwind.css",
        }),
      ],
    }),
  },
};

export default config;
