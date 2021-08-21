import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Card,
    CardContent,
    CardActions,
    CardActionArea,
    Typography,
    Button,
    Box,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    //top, left, bottom, right
    gridPadding: {
        padding: "15px 15px 0px 15px",
    },
    mainFeaturedPost: {
        position: 'relative',
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '500px',
        maxHeight: '500px',
        minWidth: '100%',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
    cardStyle: {
        minWidth: '100%',
        maxWidth: '100%',
        height: '350px',
        boxShadow: "none",
        boxShadow: "none",
        borderRadius: '0px',
        backgroundColor: '#fffff',
        color: 'black'
    },
}));

function SecondGrid() {
    const classes = useStyles();

    return (
        <Grid
            container
            style={{
                position: 'relative',
                paddingTop: '380px'
            }}
        >
            <Grid
                item
                lg={3}
                md={3}
                sm={6}
                xs={12}
            >
                <Card className={classes.cardStyle}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="h2">
                                <Box fontWeight={600}>
                                    01
                                </Box>
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                style={{ color: "fffff" }}
                            >
                                Lizards are a widespread group of squamate reptiles, with
                                over 6,000 species, ranging across all continents except
                                Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid
                item
                lg={3}
                md={3}
                sm={6}
                xs={12}
            >
                <Card className={classes.cardStyle}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h2">
                                <Box
                                    fontWeight={800}>
                                    Lizard
                                </Box>
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                Lizards are a widespread group of squamate reptiles, with
                                over 6,000 species, ranging across all continents except
                                Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid
                item
                lg={3}
                md={3}
                sm={6}
                xs={12}
            >
                <Card className={classes.cardStyle}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h2">
                                <Box
                                    fontWeight={800}>
                                    Lizard
                                </Box>
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                Lizards are a widespread group of squamate reptiles, with
                                over 6,000 species, ranging across all continents except
                                Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid
                item
                lg={3}
                md={3}
                sm={6}
                xs={12}
            >
                <Card className={classes.cardStyle}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h2">
                                <Box
                                    fontWeight={800}>
                                    Lizard
                                </Box>
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                Lizards are a widespread group of squamate reptiles, with
                                over 6,000 species, ranging across all continents except
                                Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}
