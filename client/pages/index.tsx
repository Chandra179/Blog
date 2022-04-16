import type { NextPage } from "next";
import { Container, Box, Grid } from "@mui/material";
import MyHeader from "../components/MyHeader";

const Home: NextPage = () => {
  return (
    <Container maxWidth="md" sx={{ boxShadow: 1 }}>
      <MyHeader />
    </Container>
  );
};

export default Home;
