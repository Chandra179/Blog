import type { NextPage } from "next";
import { useState } from "react";
import MyHeader from "../components/MyHeader";
import Layout from "../components/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container } from "@mui/material";
import ThemeToggle from "../components/ThemeToggle";
import MySkills from "../components/MySkills/MySkills";
import { dark, light } from "../constant/theme";

const Home: NextPage = () => {
  // The light theme is used by default
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ boxShadow: 1 }}>
        <ThemeToggle isDarkTheme={isDarkTheme} changeTheme={changeTheme} />
        <MyHeader />
        <Layout>
          <MySkills />
        </Layout>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
