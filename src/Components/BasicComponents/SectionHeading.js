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

function SectionHeading(props) {
    const classes = useStyles(props);
    return (
        <>
          <Typography className={classes.Text} variant='h3'>{props.text}</Typography>  
        </>
    )
}

export default SectionHeading
