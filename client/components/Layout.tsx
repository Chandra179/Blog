import React from "react";
import { Box } from "@mui/material";

export default function Layout({ children }: any) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      flexDirection="column"
      pt={3}
    >
        {children}
    </Box>
  );
}
