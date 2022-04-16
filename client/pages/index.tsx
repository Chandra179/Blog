import type { NextPage } from "next";
import { useState } from "react";
import MyHeader from "../components/MyHeader";
import Layout from "../components/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container, PaletteMode } from "@mui/material";
import ThemeToggle from "../components/ThemeToggle";

// Define theme settings
const light = {
  palette: {
    mode: "light" as PaletteMode,
  },
};

const dark = {
  palette: {
    mode: "dark" as PaletteMode,
  },
};

const Home: NextPage = () => {
  // The light theme is used by default
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // This function is triggered when the Switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ boxShadow: 1 }}>
        <ThemeToggle isDarkTheme={isDarkTheme} changeTheme={changeTheme} />
        <Layout>
          <MyHeader />
        </Layout>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
