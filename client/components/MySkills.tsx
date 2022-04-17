import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import iconList from "../constant/iconList.json";

export default function MySkills() {
  return (
    <Box mt={4} display="flex" flexDirection="column">
      <Typography letterSpacing={1} fontSize={19} fontWeight={800}>
        SKILLS
      </Typography>
      <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
      <Grid container>
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
