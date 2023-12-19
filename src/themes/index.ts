import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import dark from "./dark";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const breakpoints = {
  base: "0em", // 0px
  sm: "576px", // 576px
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};

const theme = extendTheme({ config, breakpoints, colors: dark });

export default theme;
