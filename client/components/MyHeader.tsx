import React from "react";
import { Box, Typography } from "@mui/material";

export default function MyHeader() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      flexDirection="column"
    >
      <Box
        component="img"
        sx={{
          height: 180,
          width: 180,
          borderRadius: "50%",
        }}
        src="luffy.jpg"
      />
      <Box mt={1}>
        <Typography letterSpacing={1} fontWeight={600} fontSize={22}>
          CHANDRA
        </Typography>
        <Typography fontSize={12} sx={{ color: "#a6a6a6" }}>
          Web Developer | Analyst | INTJ
        </Typography>
        <Box maxWidth={450}>
          <Typography mt={1} fontSize={14}>
            Always learn new things, creative person, innovative ideas,
            imaginative, flexible and hard working, though can be lazy
            sometimes.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
