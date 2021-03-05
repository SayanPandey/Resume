import React from 'react'
import {Grid,CssBaseline, Typography,makeStyles} from '@material-ui/core'
import Image from './ProfilePic'
import AboutText from './AboutText'

const useStyles = makeStyles((theme)=>({
    root:{
        //background:'#743ad5',
        //backgroundImage:'linear-gradient(to right, #743ad5, #d53a9d)',
        backgroundImage:'linear-gradient(to right, rgb(116,58,213,0.7), rgb(213,58,157,0.7))',
        //color:'#FFFFFF',
        paddingBottom:'20px',
    }
}));

function AboutPage() {
    const classes = useStyles();
    return (
        <>
            <Grid className={classes.root} container spacing = {0} direction-xs='row-reverse'>
                <Grid item md={6} xs={12}>
                    <AboutText/>
                </Grid>
                <Grid item md={6} xs={12}>
                   <Image/>
                </Grid>
            </Grid> 
        </>
    )
}

export default AboutPage
