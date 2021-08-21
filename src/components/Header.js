import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Plant from '../static/images/plant.jpeg';
import {
    Box,
    Container,
    Grid,
    Divider,
    Typography,
    Button,
    Link
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles({
    root: {
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '400px',
        maxHeight: '400px',
        boxShadow: 'none',
        borderRadius: '5px',
        marginBottom: '30px'
    },
    gridPadding: {
        padding: "90px 50px 0px 40px"
    },
    divider: {
        width: "70%", marginTop: '10px', height: '2px'
    },
    body: {
        padding: '20px 0px 0px 0px'
    },
    display: {
    }
});

export default function MyHeader(props) {
    const classes = useStyles();

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="flex-start"
            className={classes.root}
            style={{ backgroundImage: `url(${Plant})` }}
            item xl={12} lg={12} sm={12} xs={12}
        >
            <Container>
                <Grid
                    item xl={8} lg={8} sm={9} xs={12}
                    className={classes.gridPadding}
                >
                    <Typography variant="h5">
                        <Box 
                            display={{
                                xs: 'none',
                                sm: 'block'
                            }} 
                            letterSpacing={4}>
                            CHANDRA NISHAKARA
                        </Box>
                    </Typography>
                    <Divider
                        className={classes.divider}
                    />
                    <Typography className={classes.body}>
                        <Box>
                            Rational and determined graduate in computer
                            science whose curious of how everything works.
                            This blog contains projects that I work on and some
                            other activities.
                        </Box>
                    </Typography>
                    <Link href="https://github.com/Chandra179">
                        <Button
                            variant="contained"
                            color="action"
                            style={{ marginTop: "20px", width: 50 }}
                        >
                            <GitHubIcon style={{ fontSize: 20, }} />
                        </Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/chandra-888777/">
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ marginTop: "20px", width: 50, marginLeft: "10px" }}
                        >
                            <LinkedInIcon style={{ fontSize: 20, }} />
                        </Button>
                    </Link>
                </Grid>
            </Container>
        </Grid>
    );
}