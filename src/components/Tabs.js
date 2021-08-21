import React, { Fragment } from 'react';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Tabs,
    Tab,
} from '@material-ui/core';
import Home from './Home';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
    tabsStyle: {
        background: 'transparent',
        boxShadow: 'none',
    }
}));


export default function ScrollableTabsButtonAuto() {
    const allTabs = ['/Blog'];
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
        >
            <BrowserRouter>
                <div className={classes.root}>
                    <Route
                        path="/Blog"
                        render={({ location }) => (
                            <Fragment>
                                <Tabs
                                    value={location.pathname}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    style={{ padding: '0px 0px 20px 0px' }}
                                    centered
                                >
                                    <Tab
                                        label="Home"
                                        value="/Blog"
                                        component={Link}
                                        to={allTabs[0]}
                                    />
                                </Tabs>
                                <Switch>
                                    <Route path={allTabs[0]} render={() => <Home />} />
                                </Switch>
                            </Fragment>
                        )}
                    />
                </div>
            </BrowserRouter>
        </Grid>
    );
}
