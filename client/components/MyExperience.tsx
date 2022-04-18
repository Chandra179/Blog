import * as React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import myExperience from "../constant/myExperience.json";

export default function MyExperience() {
  return (
    <Box mt={5}>
      <Typography
        letterSpacing={1}
        fontSize={18}
        fontWeight={800}
        color="primary"
      >
        EXPERIENCE
      </Typography>
      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
      <Box display="flex" flexDirection="row" >
        {myExperience.map((item, i) => {
          return (
            <Box display="flex" flexDirection="column" textAlign="start" p={3}>
              <Typography>
                {item.company} - {item.role}
              </Typography>
              <Box mb={1}>
                <Typography
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {item.date}
                </Typography>
              </Box>
              {item.work.map(function (item, i) {
                return (
                  <Typography fontSize={14} key={i} sx={{ marginBottom: 0.7 }}>
                    {item}
                  </Typography>
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
