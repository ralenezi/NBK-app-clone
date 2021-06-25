import { colors, createMuiTheme } from "@material-ui/core";
import _ from "lodash";

import { softShadows } from "./shadows";
import typography from "./typography";

const baseOptions = {
  direction: "ltr",
  typography,
};

const themesOptions = {
  palette: {
    type: "light",
    action: {
      active: colors.blueGrey[600],
    },
    background: {
      default: colors.common.white,
      dark: "#f4f6f8",
      paper: colors.common.white,
    },
    primary: {
      main: "#0E4C8C",
    },
    secondary: {
      main: "#CA0000",
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
    link: {
      visited: "blue",
    },
  },
  shadows: softShadows,
};

const theme = createMuiTheme(_.merge({}, baseOptions, themesOptions));

export default theme;
