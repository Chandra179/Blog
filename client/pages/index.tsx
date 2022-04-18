import type { NextPage } from "next";
import { useState } from "react";
import MyHeader from "../components/MyHeader";
import Layout from "../components/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import ThemeToggle from "../components/ThemeToggle";
import MySkills from "../components/MySkills";
import { dark, light } from "../constant/theme";
import ProjectList from "../components/ProjectList";
import MyExperience from "../components/MyExperience";

const Home: NextPage = () => {
  // The light theme is used by default
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <Box p={3} sx={{ boxShadow: 1 }}>
        <ThemeToggle isDarkTheme={isDarkTheme} changeTheme={changeTheme} />
        <Layout>
          <MyHeader />
          <MySkills />
          <MyExperience />
          <ProjectList />
        </Layout>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
