import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import iconList from "../constant/iconList.json";

export default function MySkills() {
  return (
    <Box mt={5}>
      <Typography
        letterSpacing={1}
        fontSize={19}
        fontWeight={800}
        color="primary"
      >
        SKILLS
      </Typography>
      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {iconList.map((item, i) => {
          return (
            <Grid item lg={1} md={1} sm={1} xs={2} key={i}>
              <Box
                m={1}
                component="img"
                sx={{
                  height: 40,
                  width: 40,
                }}
                src={item.skill}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
