import React from 'react'
import { Divider, makeStyles, Typography, Container, Paper } from '@material-ui/core'
import DivLine from '../BasicComponents/DivLine'
import SectionHeading from '../BasicComponents/SectionHeading'
import PagifyHOC from "../BasicComponents/PagifyHOC"
import JobsTile from '../Experience/JobsTile'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundColor: '#FAFAFA',
        minHeight: '90vh',
        marginTop: '5vh',
        minWidth: '100%',
        fontFamily: "Segoe UI",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Divline: {
        minHeight: '100px'
    }
}));

function Experience() {
    const classes = useStyles();
    return (
        <>
            <SectionHeading text='Experience' color='#743ad5'/>
            <DivLine light='true' />
            <JobsTile image = 'MSLogo.png'/>
        </>
    )
}

export default PagifyHOC(Experience)
