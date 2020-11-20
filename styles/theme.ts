import { extendTheme, theme } from "@chakra-ui/react";

const customTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  fonts: {
    body: "Roboto, system-ui, sans-serif",
    heading: "Roboto, system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: "5px",
    md: "8px",
  },
  lineHeights: {
    ...theme.lineHeights,
    "large": "46px"
  },
  colors: {
    ...theme.colors,
    purple: {
      ...theme.colors.purple,
      500: "#8257e5",
    },
    gray: {
      ...theme.colors.gray,
      300: "#e1e1e6",
      600: "#29292e",
      700: "#202024",
      800: "#121214",
    },
  },
});

export default customTheme;
