import * as React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import myExperience from "../constant/myExperience.json";

export default function MyExperience() {
  return (
    <Box mt={4}>
      <Typography letterSpacing={1} fontSize={16} fontWeight={800}>
        EXPERIENCE
      </Typography>
      <Grid
        container
        justifyContent="space-between"
        display="flex"
        flexDirection="row"
      >
        {myExperience.map((item, i) => {
          return (
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              key={i}
              sx={{
                marginBottom: {
                  lg: 0,
                  md: 0,
                  sm: 2,
                  xs: 2,
                },
              }}
            >
              <ListItem alignItems="flex-start" sx={{ padding: 0 }}>
                <ListItemText
                  sx={{
                    fontSize: {
                      lg: 16,
                      md: 16,
                      sm: 14,
                      xs: 12,
                    },
                    paddingRight: {
                      lg: 2,
                      md: 2,
                      sm: 2,
                      xs: 0,
                    },
                  }}
                  primary={
                    <Typography fontWeight={600}>
                      {item.company} - {item.role}
                    </Typography>
                  }
                  disableTypography={true}
                  secondary={
                    <Box>
                      <Box mb={1}>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {item.date}
                        </Typography>
                        <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
                      </Box>
                      {item.work.map(function (item, i) {
                        return (
                          <Typography
                            fontSize={14}
                            key={i}
                            sx={{ marginBottom: 1 }}
                          >
                            • {item}
                          </Typography>
                        );
                      })}
                    </Box>
                  }
                />
              </ListItem>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
