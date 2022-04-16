import React from "react";
import { Box, Typography } from "@mui/material";

export default function MyHeader() {
  return (
    <React.Fragment>
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
        <Typography letterSpacing={1} fontWeight={600} fontSize={20}>
          CHANDRA
        </Typography>
        <Typography fontSize={14} sx={{ color: '#a6a6a6'}}>
          Web Developer | Software Developer | Analyst
        </Typography>
      </Box>
    </React.Fragment>
  );
}
