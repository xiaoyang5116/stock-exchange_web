import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import dark from "./dark";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const breakpoints = {
  base: "0px", // 0px
  sm: "576px", // 576px
  md: "768px", // ~768px
  lg: "992px", // ~992px
  xl: "1024px", // ~1280px
  "2xl": "1536px", // ~1536px
};

const theme = extendTheme({ config, breakpoints, colors: dark });

export default theme;
