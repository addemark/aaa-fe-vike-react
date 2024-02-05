import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [react(), vike()],
  server: {
    port: 3030,
    // host: true,
  },
};

export default config;
