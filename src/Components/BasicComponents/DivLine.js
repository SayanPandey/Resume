import React from 'react'
import {Divider,makeStyles} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    Divider: props => ({
        maxWidth:'95%',
        backgroundColor: props.light=='true'?'rgba(0, 0, 0, 0.3)':'rgba(256, 256, 256, 0.3)',
        marginRight:'auto',
        marginLeft:'auto',
    }),
}));

function DivLine(props) {
    const classes = useStyles(props);
    return (
        <>
            <Divider orientation={props.orientation} className={classes.Divider}/>
        </>
    )
}

export default DivLine;
