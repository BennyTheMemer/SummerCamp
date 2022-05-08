import { border, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const themeConfig = {
  colors: {
    gray: {
      100: "#FBFBFB",
      200: "#E3E3E3",
      300: "#C2C2C2",
      400: "#9B9B9B",
      500: "#7A7A7A",
      600: "#626262",
    },
    grenn: {
      500: "#ABCE30",
      400: "#8AC630",
      300: "#6ABB2F",
      200: "#4BAB2D", //rgba(75, 171, 45, 1)
      100: "#2A9B2B",
    },
    orange: {
      500: "#FD8D04", //rgba(253, 141, 4, 1)
      400: "#FDAE00",
      300: "#FDC400",
      200: "#FDEA33",
      100: "#FDF9C4",
    },
    red: {
      500: "#FA1A0D", //rgba(250, 26, 13, 1)
      600: "#D0021B",
      700: "#A90C15",
      800: "#8C0B1A",
      900: "#7A0A1F",
    },
    blue: {
      100: "#58B4EE",
      200: "#0E8BC4",
      300: "#066AA7",
      400: "#064A8B",
      500: "#062A6E",
      600: "#060959",
      700: "#285eab",
    },
  },

  styles: {
    global: (props) => ({
      body: {
        bg: "gray.100",
      },
    }),
  },
};

export default extendTheme(themeConfig);
