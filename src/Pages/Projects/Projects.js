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

const useStyles = makeStyles(theme =>({
    root: {
      maxWidth: '100%',
    },
    media: {
      height: 140,
    },
    heroContent: {
        backgroundColor: 'white',
        padding: theme.spacing(8, 0, 6)
    }
  }));

const Projects = _ =>{
  console.log('hello')
  const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline />
    <div backgroundColor='#eeeeee'>
    <header className={classes.root}>
            {/* Hero */}
            <div className={classes.heroContent}>
                <Typography variant='h2' align='center'>
                    Fun Projects
                </Typography>
                <Typography align='center'>
                    Mobile Apps, Web Apps, Group Projects, and more!
                </Typography>
            </div>
      
        </header>
    <Container maxWidth="lg" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
        <main>

        </main>
    </Container>
    </div>
  </React.Fragment>
);
}
 
export default Projects;