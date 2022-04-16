import React from "react";
import { Box } from "@mui/material";

export default function Layout({ children }: any) {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="flex-start"
      flexDirection="column"
    >
        {children}
    </Box>
  );
}
