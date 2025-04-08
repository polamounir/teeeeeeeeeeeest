import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    allowedHosts: ["5j4plyman.localto.net"],
    port: 4200,
    strictPort: true,
  },
  plugins: [react(), tailwindcss()],
});
