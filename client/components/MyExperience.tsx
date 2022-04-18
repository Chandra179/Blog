import * as React from "react";
import Divider from "@mui/material/Divider";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import myExperience from "../constant/myExperience.json";

export default function MyExperience() {
  return (
    <Box mt={4}>
      <Typography
        letterSpacing={1}
        fontSize={18}
        fontWeight={800}
        color="primary"
      >
        EXPERIENCE
      </Typography>
      <Divider sx={{ marginTop: 1 }} />
      <Grid container display="flex" flexDirection="row">
        {myExperience.map((item, i) => {
          return (
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              display="flex"
              flexDirection="column"
              textAlign="start"
              key={i}
              p={2}
            >
              <Typography fontWeight={600}>
                {item.company} - {item.role}
              </Typography>
              <Box mb={1.5}>
                <Typography
                  component="span"
                  variant="body2"
                  color="primary.light"
                >
                  {item.date}
                </Typography>
              </Box>
              <Box pl={1.5}>
                {item.work.map(function (item, i) {
                  return (
                    <Typography
                      color="text.secondary"
                      fontSize={14}
                      key={i}
                      display="list-item"
                      sx={{ marginBottom: 0.7 }}
                    >
                      {item}
                    </Typography>
                  );
                })}
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
