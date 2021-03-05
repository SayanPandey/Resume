import React, {useEffect,useState} from 'react'
import { makeStyles, AppBar, IconButton, Toolbar, Typography, Collapse, Zoom } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LandingImage from '../../Assets/LandingPage0N.png'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '90vh',
        //width:'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginLeft:'auto',
        marginRight:'auto',
        background: `url(${LandingImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize:'cover',
    },
    Name: {
        paddingTop:'50%',
        color: "#FFFFFF",
        textShadow: '0px 2px 20px #000000',
        //minHeight:'100vh',
        //marginTop:'40vh',
        // alignItems: 'center',
        // justifyContent: 'center',
        fontFamily: "Segoe UI",
        //display:'flex',
        //flexGrow:'100'
    },
    more: {
        color: 'White',
        fontSize: '50px',
        textShadow: '0px 2px 20px #000000',
        // display:'flex'

    },
    Collapse : {
        // background: 'rgb(0,0,0,0.3)',
        // background: 'linear-gradient(360deg, rgba(0,0,0,1) 10%, rgba(33,33,33,0.2) 69%, rgba(33,33,33,0) 100%)',
    }
}));

function Header(props) {
    const classes = useStyles();
    const[checked,setChecked] = useState(false);
    useEffect(()=>{
        setChecked(true);
    });


    return (
        <Collapse className={classes.Collapse} in={checked}
            style={{ transformOrigin: '0 0 0' }}
             {...(checked ? { timeout: 1000 } : {})} collapsedHeight={10}>
            <div className={classes.root}>
                <Typography className={classes.Name} variant="h1">Sayan Pandey</Typography>
                {props.children}
                {/* <IconButton>
                    <ExpandMoreIcon className={classes.more} />
                </IconButton> */}
            </div>
        </Collapse>
    )
}

export default Header
