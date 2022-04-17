import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import iconList from "../constant/iconList.json";

export default function MySkills() {
  return (
    <Box mt={4} display="flex" flexDirection="column">
      <Typography fontSize={20} fontWeight={600}>
        My Skills
      </Typography>
      <Grid container mt={1}>
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
