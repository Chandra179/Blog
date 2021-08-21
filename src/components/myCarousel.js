import React from 'react';
import Carousel from "react-material-ui-carousel"
import autoBind from "auto-bind"
import { withStyles } from '@material-ui/core/styles';
import '../static/css/Carousel.scss'
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
} from '@material-ui/core';


function Banner(props) {
    if (props.newProp) console.log(props.newProp)
    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;

    let items = [];
    const content = (
        <Grid item xs={12 / totalItems} key="content">
            <CardContent className="Content">
                <Typography className="Title">
                    {props.item.Name}
                </Typography>

                <Typography className="Caption">
                    {props.item.Caption}
                </Typography>

                <Button variant="outlined" className="ViewButton">
                    View Now
                </Button>
            </CardContent>
        </Grid>
    )


    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={12 / totalItems} key={item.Name}>
                <CardMedia
                    className="Media"
                    image={item.Image}
                    title={item.Name}
                >
                    <Typography className="MediaCaption">
                        {item.Name}
                    </Typography>
                </CardMedia>

            </Grid>
        )

        items.push(media);
    }

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}

const items = [
    {
        Name: "Electronics",
        Caption: "Electrify your friends!",
        contentPosition: "left",
        Items: [
            {
                Name: "Macbook Pro",
                Image: "https://source.unsplash.com/featured/?macbook"
            },
            {
                Name: "iPhone",
                Image: "https://source.unsplash.com/featured/?iphone"
            }
        ]
    },
    {
        Name: "Home Appliances",
        Caption: "Say no to manual home labour!",
        contentPosition: "middle",
        Items: [
            {
                Name: "Washing Machine WX9102",
                Image: "https://source.unsplash.com/featured/?washingmachine"
            },
            {
                Name: "Learus Vacuum Cleaner",
                Image: "https://source.unsplash.com/featured/?vacuum,cleaner"
            }
        ]
    },
    {
        Name: "Decoratives",
        Caption: "Give style and color to your living room!",
        contentPosition: "right",
        Items: [
            {
                Name: "Living Room Lamp",
                Image: "https://source.unsplash.com/featured/?lamp"
            },
            {
                Name: "Floral Vase",
                Image: "https://source.unsplash.com/featured/?vase"
            }
        ]
    }
]

const useStyles = theme => ({
    //top, left, bottom, right
    gridPadding: {
        padding: '30px 15px 10px 15px'
    },
});

class BannerExample extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container
                justifyContent="center"
                alignItems="center"
            >
                <Grid
                    item xl={12} lg={12} md={12} sm={12} xs={12}
                    className={classes.gridPadding}
                >
                    <div style={{ marginBottom: "30px" }}>
                        <Carousel
                            className="Example"
                            autoPlay={true}
                            animation="fade"
                            indicators={true}
                            timeout={500}
                            cycleNavigation={false}
                            navButtonsAlwaysVisible={true}
                            navButtonsAlwaysInvisible={false}
                            next={(now, previous) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                            prev={(now, previous) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                            onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                        >
                            {
                                items.map((item, index) => {
                                    return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                                })
                            }
                        </Carousel>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(BannerExample);