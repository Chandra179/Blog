import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Container,
    Grid,
    CardMedia,
    Typography,
    Paper,
    Box
} from "@material-ui/core";
import Skull from '../static/images/skull.jpg'


const useStyles = makeStyles((theme) => ({
    //top, left, bottom, right
    gridPadding: {
        padding: "30px 15px 50px 15px",
    },
    media: {
        height: '100%',
        width: '100%',
    },
    root: {
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '250px',
        maxHeight: '250px',
        borderRadius: '0px'
    },
    secondary: {
        position: 'relative',
        textAlign: 'center',
        fontWeight: 600,
    },
}));

function FirstGrid() {
    const classes = useStyles();

    return (
        <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
        >
            <Box
                display={{
                    xs: 'none',
                    sm: 'block'
                }}
            >
                <Paper
                    className={classes.root}
                    style={{
                        color: '#ffffff',
                        backgroundColor: '#292d33'
                    }}
                >
                    <Container
                        maxWidth="sm"
                        className={classes.secondary}
                    >
                        <Typography
                            gutterBottom
                            variant="h4"
                            style={{
                                paddingTop: '50px',
                                fontFamily: 'Araboto',
                            }}
                        >
                            Meet the Team
                        </Typography>
                        <Typography
                            gutterBottom
                            ariant="h6"
                            noWrap={false}
                            className={classes.secondary}
                            style={{
                                fontWeight: 520,
                                paddingBottom: '40px',
                            }}
                        >
                            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s when an unknown
                        </Typography>
                    </Container>
                </Paper>
            </Box>
        </Grid>
    );
}


function SecondGrid1() {
    const classes = useStyles();

    return (
        <Grid
            item
            lg={4}
            md={4}
            sm={6}
            xs={12}
        >
            <Paper
                className={classes.root}
                style={{
                    backgroundImage: `url(${Skull})`
                }}
            >
                <CardMedia
                    className={classes.media}
                    image={Skull}
                    title="Contemplative Reptile"
                />
            </Paper>
        </Grid>
    );
}


function SecondGrid2() {
    const classes = useStyles();

    return (
        <Grid item lg={4} md={4} sm={6} xs={12}>
            <Paper
                className={classes.root}
                style={{
                    color: 'black',
                    backgroundColor: '#ffffff'
                }}
            >
                <Container
                    maxWidth="sm"
                    style={{
                        textAlign: 'center',
                        padding: '0px 40px 0px 40px'
                    }}
                >
                    <Typography
                        variant="h4"
                        className={classes.secondary}
                        style={{
                            paddingTop: '30px',
                            fontFamily: 'Araboto',
                        }}
                    >
                        Caroline
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="h5"
                        noWrap={false}
                        className={classes.secondary}
                        style={{
                            fontFamily: 'Corporate',
                            fontWeight: 10
                        }}
                    >
                        HEAD MESSAGE
                    </Typography>
                    <Typography
                        variant="p"
                        align="center"
                        noWrap={false}
                        className={classes.secondary}
                        style={{
                            fontWeight: 10
                        }}
                    >
                        You can override the style of the component thanks
                        to one of these customization points
                    </Typography>
                    <Typography
                        variant="h6"
                        className={classes.secondary}
                        style={{
                            paddingTop: '30px',
                            fontFamily: 'Araboto',
                            fontWeight: 100
                        }}
                    >
                        Learn More
                    </Typography>
                </Container>
            </Paper>
        </Grid>
    );
}

export default function MultiGrid() {
    const classes = useStyles();

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={classes.gridPadding}
            item lg={12} md={12} sm={12} xs={12}
        >
            <FirstGrid />
            <SecondGrid1 />
            <SecondGrid2 />
            <SecondGrid1 />
            <SecondGrid2 />
            <SecondGrid1 />
            <SecondGrid2 />
        </Grid>
    );
}

