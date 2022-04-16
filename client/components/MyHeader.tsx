import React from "react";
import { Container, Box, Typography } from "@mui/material";

export default function MyHeader() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      flexDirection="column"
      boxShadow={1}
      p={3}
    >
      <Box
        component="img"
        sx={{
          height: 170,
          width: 170,
          borderRadius: "50%",
        }}
        alt="The house from the offer."
        src="lupi.jpg"
        />
      <Box mt={2}>

      </Box>
      <Typography letterSpacing={1}>CHANDRA</Typography>
    </Box>
  );
}
