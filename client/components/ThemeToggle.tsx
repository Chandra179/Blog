import React from "react";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

type Props = {
  isDarkTheme: boolean;
  changeTheme: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const ThemeToggle: React.FC<Props> = ({ isDarkTheme, changeTheme }) => {
  return (
    <Box display="flex" justifyContent="flex-end">
      <IconButton onClick={changeTheme}>
        {isDarkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
};

export default ThemeToggle;
