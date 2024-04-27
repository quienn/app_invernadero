import konstaConfig from "konsta/config";
import type { Config } from "tailwindcss";

declare function konstaConfig(userConfig: Config): void;

export default konstaConfig({
  content: ["./components/*.{js,ts,jsx,vue}", "./pages/*.{js,ts,jsx,vue}"],
  darkMode: "media",
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
});
