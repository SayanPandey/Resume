import React from 'react'
import {Typography,makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    Text: props=>({
        color: props.color,
        padding: '10px 10px 10px 20px',
        fontFamily: "Segoe UI",
        top: '0',
    }),
}));

export default function SectionHeading(props) {
    const classes = useStyles(props);
    return (
        <>
          <Typography className={classes.Text} variant='h3'>{props.text}</Typography>  
        </>
    )
}

function SectionSubHeading(props) {
    const classes = useStyles(props);
    return (
        <>
          <Typography className={classes.Text} variant="h5" component="h2">{props.time}</Typography>  
        </>
    )
}

function SectionParagraph(props) {
    const classes = useStyles(props);
    return (
        <>
          <Typography className={classes.Text} variant="body2" component="p">{props.children}</Typography> 
        </>
    )
}

export {SectionHeading,SectionSubHeading,SectionParagraph}
