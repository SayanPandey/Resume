import React from 'react'
import '../BasicComponents/Background.css'
import { makeStyles, Icon, Grid, Box } from '@material-ui/core'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MSLogo from '../../Assets/MSLogo.png'
import SasmsungLogo from '../../Assets/SamsungLogo.png'
import MAQSoftware from '../../Assets/MAQSoftLogo.png'
import {SectionHeading, SectionSubHeading, SectionParagraph} from '../BasicComponents/SectionHeading'
import DivLine from '../BasicComponents/DivLine'


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
    root: {
        maxWidth: '95%',
        maxHeight:'40vh',
        margin: '2%',
        marginLeft:'auto',
        marginRight:'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    media: {
        maxWidth:'20%',
        height: 140,
    },
    Image :{
        maxHeight:'100%',
        maxWidth : '100%',
        //minHeight:'20vh',
        paddingLeft:'3%',
        paddingRight:'3%',
    },
    CardMain :{
        // maxHeight:'40vh',
        // minHeight:'40vh'
    },
    GridMain:{
         maxHeight : '30vh'
    },
    CardHeight :{
        // display:'block',
         maxHeight:'40vh',
        // minWidth:'100%',
        overflow:"hidden"
    },
    GridHidden:{
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    }
});

function SelectImage(props){
    const classes = useStyles();
    switch(props.Image){
        case "Microsoft":
            return (<img className={classes.Image} src={MSLogo} alt="Microsoft"/>)
        case 'Samsung':
            return (<img className={classes.Image} src={SasmsungLogo} alt="Samsung"/>)
        case 'MAQ Software':
            return (<img className={classes.Image} src={MAQSoftware} alt="MAQ Software"
                style = {{paddingBottom: "21%", paddingTop: "21%"}}
            />)
    }
}

function CompanyLogo(props){
    const classes = useStyles();
    return(
        <ThemeProvider theme={theme}>
            <Card raised className={classes.CardMain}>
                <Grid container direction="column" spacing={0}>
                    <Grid item xs={12}>
                        <SelectImage {...props} class={classes.Image}/>
                    </Grid>
                    <Grid item xs={12} minWidth='100%'>
                        <CardActionArea className='lightBackground' >
                            <CardContent className='lightText'>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.Image}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {props.location}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                </Grid>
            </Card>
        </ThemeProvider>
    )
}

function SectionHead(props){
    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid container spacing={0} >
                    <Grid item xs={8} md={12} >
                        <SectionHeading {...props} text={props.post} color='#743ad5'/>
                        <Box display={{ xs: 'none', sm: 'inline' }}>
                            <SectionSubHeading {...props} timeRange={props.post} color='#d53a9d'/>
                        </Box>
                    </Grid>
                    <Grid item xs={4} md={0}>
                        <Box display={{ xs: 'inline', md: 'none' }}>
                            <SelectImage {...props}/>
                        </Box>
                    </Grid>
                </Grid>

                <Box display={{ xs: 'inline', sm: 'none' }}>
                    <SectionSubHeading {...props} timeRange={props.post} color='#d53a9d'/>
                </Box>
                <DivLine light='true' />
            </ThemeProvider>
        </>
    )
}


function JobsTile(props) {
    const classes = useStyles();
    return (
        <>
                <Grid container spacing={3}  className={classes.root}>
                    {/* <Box display={{ xs: 'none', md: 'inline' }} data='hello'> */}
                        <Grid className={classes.GridHidden} item md={3} Sayan='true'>
                            <Box display={{ xs: 'none', md: 'inline-block' }}>
                                <CompanyLogo {...props} />
                            </Box>
                        </Grid>
                    {/* </Box> */}
                    
                    <Grid md={9}>
                        <Card raised className={classes.CardHeight}>
                            <CardContent className='darkText'>
                                
                                <SectionHead {...props}/>

                                <SectionParagraph>
                                Involved in Samsung’s famous Knox Platform. The key role is
                                to develop and maintain Samsung mobile devices’ apps and
                                features. The projects I am currently working on are:
                                o AFW/Workspace: Development and maintenance of
                                Android AFW and Samsung Knox. The project deals
                                with user-admin based mobile management.
                                o Secure Folder: A separate space in mobile phones
                                with extra layer of security to keep apps, mails, photos
                                etc. in a separate and safe place.
                                o Dual Messenger: To facilitate the use of more than
                                one instance of a messaging app on a device.
                                </SectionParagraph>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
        </>
    )
}

export default JobsTile
