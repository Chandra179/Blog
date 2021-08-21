import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Luffy from "../static/images/luffy.jpg";
import {
  Container,
  Grid,
  CssBaseline,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CardActionArea,
  Typography,
  Button,
  Box,
  Link
} from "@material-ui/core";
import MyData from '../Data/project.json'


const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 600,
    boxShadow: "none",
    textDecoration: 'none'
  },
  //top, left, bottom, right
  gridPadding1: {
    padding: "40px 15px 15px 15px",
  },
  gridPadding2: {
    padding: "20px 25px 0px 25px",
  },
  media: {
    height: 140,
    borderRadius: "8px",
    margin: '0px 0px 10px 0px'
  },
});


function Grid1() {
  const classes = useStyles();

  return (
    <Grid
      item
      lg={12}
      md={12}
      sm={12}
      xs={12}
      className={classes.gridPadding1}
    >
      <Typography
        gutterBottom
        variant="h4"
      >
        <Box
          textAlign="center"
          fontWeight={500}
          letterSpacing={3}
        >
          Latest projects
        </Box>
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        noWrap={false}
      >
        <Container maxWidth="md">
          <Box textAlign="center">
            This project consisnt many of various in programming,
          </Box>
        </Container>
      </Typography>
    </Grid>
  )
}


function Grid2() {
  const classes = useStyles();
  const myData = MyData;

  return (
    <>
      {myData.map(res =>
        <Grid
          item
          lg={4}
          md={4}
          sm={6}
          xs={12}
          className={classes.gridPadding2}
        >
          <Card className={classes.root}>
            <Link href={res.link} style={{ color:'black', textDecoration: 'none' }}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={res.img}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                  >
                    <Box fontWeight={700}>
                      {res.title}
                    </Box>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {res.body}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
            <CardActions>
            </CardActions>
          </Card>
        </Grid>
      )}
    </>
  )
}


export default function MyProject() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      item lg={12} md={12} sm={12} xs={12}
    >
      <Grid2 />
    </Grid>
  );
}
