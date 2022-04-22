import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import myProject from "../constant/myProject.json";

const actionBtn = {
  fontSize: 14,
  textTransform: "none",
  height: 30,
};

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
        justifyContent="center"
        display="flex"
        flexDirection="row"
      >
        {myProject.map((item, i) => {
          return (
            <Grid
              display="flex"
              textAlign="start"
              justifyContent="center"
              key={i}
              item
              lg={6}
              md={6}
              sm={6}
              xs={12}
              p={2}
              sx={{
                marginBottom: {
                  lg: 0,
                  md: 0,
                  sm: 2,
                  xs: 2,
                },
              }}
            >
              <Card>
                <CardMedia  component="img" image={item.cover} />
                <CardContent>
                  <Typography
                    fontWeight={600}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
                <CardActions>
                  {item.demo ? (
                    <Button href={item.demo} variant="contained" sx={actionBtn}>
                      See Demo
                    </Button>
                  ) : (
                    ""
                  )}
                  <Button href={item.code} sx={actionBtn}>
                    See Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
