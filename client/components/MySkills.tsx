import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import iconList from "../constant/iconList.json";

export default function MySkills() {
  return (
    <Box mt={4} display="flex" flexDirection="column">
      <Typography letterSpacing={1} fontSize={16} fontWeight={800}>
        SKILLS
      </Typography>
      <Grid container mt={1}>
        {iconList.map((item, i) => {
          return (
            <Grid item lg={1} md={1} sm={1} xs={2} key={i}>
              <Box
                mr={3}
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
