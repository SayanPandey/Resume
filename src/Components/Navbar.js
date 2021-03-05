import React from 'react'
import {Link} from 'react-router-dom'
import {Tab,Tabs,AppBar,makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    AppBar : {
      background:'none',
      //backgroundColor :'#0D47A1',
      color:'#F3E5F5',
      position: 'sticky',
      top: '0',
      width: '100%'
    }
}));

function Navbar() {

    const classes = useStyles();
    return (
        <>
        <AppBar className={classes.AppBar} position="static">
          <Tabs aria-label="simple tabs example">
            <Tab label="About"  />
            <Tab label="Item Two"  />
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>
        </>
    )
}

export default Navbar;
