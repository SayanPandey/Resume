import React from 'react'
import { Divider, makeStyles, Typography, Container, Paper } from '@material-ui/core'
import DivLine from '../BasicComponents/DivLine'
import {SectionHeading} from '../BasicComponents/SectionHeading'
import PagifyHOC from "../BasicComponents/PagifyHOC"
import JobsTile from '../Experience/JobsTile'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100 vh',
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
            <JobsTile Image = 'Microsoft' location='Bangalore, India' post="Software Engineer" time="April, 2021 - Present"></JobsTile>
            <JobsTile Image = 'Samsung' location='Noida (NCR), India' post="Software Engineer" time="June, 2019 - March, 2021"></JobsTile>
            <JobsTile Image = 'MAQ Software' location='Hyderabad, India' post="Software Engineer Intern" time="May, 2018 - July, 2018"></JobsTile>
        </>
    )
}

export default PagifyHOC(Experience)
