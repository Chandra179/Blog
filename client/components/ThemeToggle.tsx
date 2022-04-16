import React from "react";
import {
  Card,
  CardHeader,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";

type Props = {
  isDarkTheme: boolean;
  changeTheme: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ThemeToggle: React.FC<Props> = ({ isDarkTheme, changeTheme }) => {
  return (
    <Card>
      <CardHeader
        action={
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={isDarkTheme} onChange={changeTheme} />}
              label="Dark Theme"
            />
          </FormGroup>
        }
      />
    </Card>
  );
};

export default ThemeToggle;
