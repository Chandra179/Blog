import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";

export default function ProjectList() {
  return (
    <Box mt={5}>
      <Typography
        letterSpacing={1}
        fontSize={18}
        fontWeight={800}
        color="primary"
      >
        PROJECT
      </Typography>
      <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
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
          <Box
            boxShadow={1}
            width={300}
            height={250}
            component="img"
            src="luffy.jpg"
          />
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
