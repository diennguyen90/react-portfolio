import React from 'react'; // Import the Component component from React

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Images from '../../Images/indecisive.png'


const useStyles = makeStyles(theme =>({
    root: {
      maxWidth: '100%',
    }, 
    rootGrid: {
        flexGrow: 1,
      },
    media: {
      height: 140,
    },
    heroContent: {
        backgroundColor: 'white',
        padding: theme.spacing(8, 0, 6)
    },
    paperGrid: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      card: {
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia:{
        maxWidth: '100%',
        height: '100%',
        margin: 'auto',
        width: '100%',
        textAlign: 'center',
        backgroundColor: 'gray'
      },
      cardTitle:{
          color:'white',
          padding: theme.spacing(4,0,4)
      }
  }));

const Projects = _ =>{
  console.log('hello')
  const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline />
    {/* background */}
    <div backgroundColor='#eeeeee'>
    {/* Hero Header*/}
    <header className={classes.root}>
            <div className={classes.heroContent}>
                <Typography variant='h2' align='center'>
                    Fun Projects
                </Typography>
                <Typography align='center'>
                    Mobile Apps, Web Apps, Group Projects, and more!
                </Typography>
            </div>
      
        </header>
        {/* Main Container */}
    <Container maxWidth="lg" style={{ backgroundColor: 'white', height: '100vh' }}>
        <main>
            <div>
                <Grid container spacing={3}>
                    <Grid item md={6} sm={12} xs={12}>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardMedia}>
                                        <Typography variant='h4' align='center' className={classes.cardTitle}>
                                            DEFINITELY NOT IMDB
                                        </Typography>
                                </CardContent>
                            </Card>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardMedia}>
                                    <img src='https://safavis.github.io/indecisive/assets/image/logo_ind.png'></img>
                                    <Typography align='center' className={classes.cardTitle}> Indecisive</Typography>
                                    <Grid container spacing={3}>
                                        <Grid item md={6} sm={12} xs={12}>
                                            <Typography align='center'>
                                                <Button variant='contained' size="small" color="defaulty" align='center'>
                                                    Demo
                                                </Button>
                                            </Typography>
                                        </Grid>
                                        <Grid item md={6} sm={12} xs={12}>
                                        <Typography align='center'>
                                            <Button variant='contained' size="small" color="primary" align='center'>
                                                Source Code
                                            </Button>
                                        </Typography>
                                    </Grid>
                                    </Grid>
                                </CardContent>
                                {/* <Grid container spacing={3}>
                                    <Grid item md={6}>
                                        <Typography align='center'>
                                            <Button size="small" color="defaulty" align='center'>
                                                Demo
                                            </Button>
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography align='center'>
                                            <Button size="small" color="primary" align='center'>
                                                Source Code
                                            </Button>
                                        </Typography>
                                    </Grid>
                                </Grid> */}
                            </Card>
                    </Grid>
                     <Grid item md={3} sm={12} xs={12}>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardMedia}>
                                    <Typography align='center'>
                                        INDECISIVE
                                    </Typography>
                                </CardContent>
                            </Card>
                    </Grid>
                    <Grid item md={3} sm={12} xs={12}>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardMedia}>
                                    <Typography align='center'>
                                        INDECISIVE
                                    </Typography>
                                </CardContent>
                            </Card>
                    </Grid>
                    <Grid item md={3} sm={12} xs={12}>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardMedia}>
                                    <Typography align='center'>
                                        INDECISIVE
                                    </Typography>
                                </CardContent>
                            </Card>
                    </Grid>
                    <Grid item md={3} sm={12} xs={12}>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardMedia}>
                                    <Typography align='center'>
                                        INDECISIVE
                                    </Typography>
                                </CardContent>
                            </Card>
                    </Grid>
                </Grid>
            </div>
        </main>
    </Container>
    </div>
  </React.Fragment>
);
}
 
export default Projects;