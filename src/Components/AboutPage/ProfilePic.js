import React from 'react'
import { CssBaseline, makeStyles, Typography, Paper } from "@material-ui/core";
import LandingImage from '../../Assets/LandingPage0N.png'
import Header from './Header'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '90vh',
        maxHeight:'100%',
        minWidth: '100%',
        //backgroundColor:'#010101',
        //width: '100%',
        backgroundImage: `url(${LandingImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        //backgroundAttachment:'fixed',
        //filter:'blur(5px)',
        background: 'rgb(0,0,0,0.3)',
        //background: 'linear-gradient(360deg, rgba(0,0,0,1) 20%, rgba(33,33,33,0.2) 49%, rgba(33,33,33,0.3) 100%)',

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
        textAlign:'center',
        //background:'none',
        background: 'rgb(0,0,0,0.3)',
        background: 'linear-gradient(360deg, rgba(0,0,0,1) 15%, rgba(33,33,33,0.1) 45%, rgba(33,33,33,0) 100%)',
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
                </Header>
            </div>
        </Paper>
        </>
    )
}

export default Landingpage
