import React from 'react'
import { Divider, makeStyles, Typography, Container, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: '#FAFAFA',
        // backgroundImage :`url(${Bg})`,
        // filter: 'blur(10px)',
        minHeight: '90vh',
        marginTop:'5vh',
        minWidth: '100%',
        //width: '100%',
        // width:'auto',
        fontFamily: "Segoe UI",
        color: '#010101',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text: {
        //zIndex: '3',
        padding: '10px 10px 10px 20px',
        fontFamily: "Segoe UI",
        top: '0',
    },
    Paper :{
        minHeight:'90vh',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'auto',
        marginBottom:'auto',
        maxWidth :'95%',
        textAlign:'left',
        background:'#212121',
        color:'#FFFFFF',
        background: 'rgb(1,1,1)',
        background: 'linear-gradient(360deg, rgba(1,1,1,1) 20%, rgba(33,33,33,1) 49%, rgba(33,33,33,1) 100%)',
        // background: 'rgb(170,193,255)',
        // background: 'linear-gradient(130deg, rgba(79,127,255,1) 0%, rgba(220,227,249,1) 20%, rgba(234,238,249,1) 35%, rgba(255,255,255,1) 50%, rgba(255,250,241,1) 62%, rgba(255,237,200,1) 76%, rgba(255,170,0,0.7262255243894433) 100%)',    
    },
    Divider:{
        maxWidth:'95%',
        backgroundColor:'rgba(256, 256, 256, 0.3);',
        marginRight:'auto',
        marginLeft:'auto',
        //background: theme.palette.divider,
    },
    Para:{
        padding : '10px 25px 10px 25px',
        fontSize:'1rem',
    }
}));

function AboutText() {
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <Paper className={classes.Paper}  elevation={3}>
                <Typography className={classes.Text} variant='h3'>About</Typography>
                <Divider className={classes.Divider}/>
                    <p className={classes.Para}>Hi There :)<br/> I am extremely delighted that you are here to visit. Thank you :) <br/>
                    My name is <b>Sayan Pandey</b> and this is my web Resume.
                    </p>
                    <p className={classes.Para}>
                    I am a Innovative and Creative Software Engineer by profession. With about 2 years of experience, I have evolved myself 
                    in dealing, managing and using my skills to make production quality Software Products. I am a result oriented person and
                    my greatest driving factor is Results.
                    <br/></p>  

                    <p className={classes.Para}>
                    I am an incoming Software Engineer at <b>Microsoft</b>. 
                    I am former student of National Institute of Technology, Durgapur and presently working with Samsung Research and
                    Development, Noida as Software Engineer. I consider myself a ‘forever student’, willing to learn and prosper sociologically and technologically in a fun and challenging
                    environment. With my endless endeavors and versatile nature, I am ready for any challenge. I am highly motivated person and believe in team work and collaboration. I have a profound interest in music and art.
                    <br/>Please feel free to connect with me anytime. 
                    </p>
            </Paper>
        </div >

    )
}

export default AboutText
