import React from 'react'
import {Grid,CssBaseline, Typography,makeStyles} from '@material-ui/core'
import Image from './ProfilePic'
import AboutText from './AboutText'

const useStyles = makeStyles((theme)=>({
    root:{
        background:'#010101',
        //color:'#FFFFFF',
        paddingBottom:'20px'
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        </>
    )
}

export default AboutPage
