import './Pagify.css'
import React from 'react'
import PropTypes from 'prop-types'
import { Paper } from "@material-ui/core";
import StyleCSS from './Pagify.css'

const paperStyle = {
    minHeight:'90vh',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'5vh',
    marginBottom:'auto',
    minWidth :'95%',
    textAlign:'left',
    //background: '#212121',
    //color: '#FFFFFF',
    //background: 'rgb(1,1,1)',
    //background: 'linear-gradient(360deg, rgba(1,1,1,1) 20%, rgba(33,33,33,1) 49%, rgba(33,33,33,1) 100%)',
}

const root ={
    minHeight: '90vh',
    minWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export default (WrappedComponent) => {

    const hocComponent = ({ ...props }) =>
    (
        <div style={root}>
            <Paper elevation={24} style={paperStyle} className="border-gradient border-gradient-purple" >
                <WrappedComponent {...props} />
            </Paper>
        </div>
    )

    hocComponent.propTypes = {
    }

    return hocComponent
}
