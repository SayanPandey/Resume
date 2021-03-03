import React from 'react'
import { CssBaseline, makeStyles, Typography, Paper } from "@material-ui/core";
import LandingImage from '../../Assets/LandingPage0N.png'
import Header from './Header'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '90vh',
        minWidth: '100%',
        backgroundColor:'#010101',
        //width: '100%',
        backgroundImage: `url(${LandingImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        //backgroundAttachment:'fixed',
        //filter:'blur(5px)',
        background: 'rgb(1,1,1)',
        background: 'linear-gradient(360deg, rgba(1,1,1,1) 20%, rgba(33,33,33,1) 49%, rgba(33,33,33,1) 100%)',

    },
    subtitle: {
        color: 'White',
        fontFamily: "Segoe UI",
        Bottom: '60vh'
    },
    Paper: {
        minHeight: '90vh',
        marginLeft: '2.5%',
        marginRight: '2.5%',
        marginTop: '5vh',
        marginBottom: 'auto',
        maxWidth: '100%',
    },
}));

function Landingpage() {
    const classes = useStyles();
    return (
        <>
        <Paper className={classes.Paper} elevation={3}>
            <CssBaseline />
            <div className={classes.root}>
                <Header>
                    {/* <Typography className={classes.subtitle} variant="subtitile1">Hello</Typography> */}
                </Header>
            </div>
        </Paper>
        </>
    )
}

export default Landingpage
