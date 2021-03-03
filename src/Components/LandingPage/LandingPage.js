import React from 'react'
import { AppBar, IconButton, Toolbar, Typography, makeStyles, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: '#010101',
        color: '#FFFFFF',
        position:'sticky',
        top:'0',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function LandingPage() {
    const classes = useStyles();

    return (
        <>
            <AppBar className={classes.root} position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default LandingPage
