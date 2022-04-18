import React from "react";
import { Box, Typography } from "@mui/material";

const tags = [
  "Fresh graduate",
  "Web Developer",
  "Computer science",
  "Universitas Multimedia Nusantara",
  "INTJ",
];

export default function MyHeader() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      flexDirection="column"
      mb={1}
    >
      <Box
        component="img"
        sx={{
          height: 180,
          width: 180,
          borderRadius: "50%",
        }}
        src="img/luffy.jpg"
      />
      <Box mt={1} display="flex" alignItems="center" flexDirection="column">
        <Typography letterSpacing={2} fontWeight={600} fontSize={28}>
          CHANDRA
        </Typography>
        <Box display="flex" flexDirection="row">
          <Typography fontSize={12} color="primary.light">
            Fresh graduate
            <span>&nbsp;&nbsp;</span> | <span>&nbsp;&nbsp;</span>
            Web Developer
            <span>&nbsp;&nbsp;</span> | <span>&nbsp;&nbsp;</span>
            Computer science
            <span>&nbsp;&nbsp;</span> | <span>&nbsp;&nbsp;</span>
            Universitas Multimedia Nusantara
            <span>&nbsp;&nbsp;</span> | <span>&nbsp;&nbsp;</span>
            INTJ
          </Typography>
        </Box>
        <Box maxWidth={450}>
          <Typography mt={1} fontSize={15} color="text.secondary">
            Always learn new things, creative person, innovative ideas,
            imaginative, flexible and hard working, though can be lazy
            sometimes.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
