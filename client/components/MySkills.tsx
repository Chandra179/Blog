import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import iconList from "../constant/iconList.json";

export default function MySkills() {
  return (
    <Box mt={5}>
      <Typography
        letterSpacing={1}
        fontSize={18}
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
            <Grid item lg={2} md={2} sm={2} xs={2} key={i}>
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
