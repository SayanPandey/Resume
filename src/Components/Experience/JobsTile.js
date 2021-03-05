import React from 'react'
import { makeStyles, Icon } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MSLogo from '../../Assets/MSLogo.png'

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        margin: '2%'
    },
    media: {
        maxWidth:'20%',
        height: 140,
    },
});


function JobsTile(props) {
    const classes = useStyles();
    return (
        <>
            <Card raised className={classes.root}>
            <CardMedia className={classes.media} image={MSLogo} title="Microsoft Logo" />
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Microsoft
                    </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Coming Soon !!
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}

export default JobsTile
