import { PaletteMode } from "@mui/material";
import { amber } from "@mui/material/colors";

const light = {
  palette: {
    mode: "light" as PaletteMode,
  },
};

const dark = {
  palette: {
    mode: "dark" as PaletteMode,
    primary: {
      main: "#3399ff",
      light: "#79c9ff",
      dark: "#006ccb"
    },
    background: {
      default: "#001e3c",
    },
  },
};

export { light, dark };
