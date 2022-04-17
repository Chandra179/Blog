import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";

export default function ProjectList() {
  return (
    <Box mt={3}>
      <Typography letterSpacing={1} fontSize={19} fontWeight={800}>
        PROJECT
      </Typography>
      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
      <Grid
        container
        justifyContent="space-between"
        display="flex"
        flexDirection="row"
      >
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            marginBottom: {
              lg: 0,
              md: 0,
              sm: 2,
              xs: 2,
            },
          }}
        >
          <Box display="flex" flexDirection="row" 
              mt={2}>
            <Box
              boxShadow={1}
              width={300}
              height={250}
              component="img"
              src="luffy.jpg"
            />
            <Box display="flex" flexDirection="column">
              <Box width={50} height={50} component="img" src="luffy.jpg" />
              <Box width={50} height={50} component="img" src="luffy.jpg" />
              <Box width={50} height={50} component="img" src="luffy.jpg" />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            marginBottom: {
              lg: 0,
              md: 0,
              sm: 2,
              xs: 2,
            },
          }}
        ></Grid>
      </Grid>
    </Box>
  );
}
