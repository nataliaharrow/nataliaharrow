import React from 'react';
import Welcome from './components/Welcome';
import About from './components/About';
import Contact from './components/Contact';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Resume from './components/Resume';
import Image from './backgroundPic2.jpeg';

const useStyles = makeStyles((theme) => ({
  welcomeGridOut: {
    // backgroundImage: `url(${Image})`,
    // boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, .5)',
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
    justify: 'center',
    alignItems: 'center',
  }, 
  welcomeGridIn: {
    marginTop: '15%',
    marginLeft: '20%',
    marginRight: '20%',
  }, 
  aboutGridOut: {
    width: '100vw',
    minHeight: '100vh',
    spacing: 10,
    justify: 'center',
    alignItems: 'center'
  }, 
  aboutGridIn: {
    marginTop: '4%',
  }, 
  contactGrid: {
    width: '100vw',
    height: '100vh',
    justify: 'center',
    alignItems: 'center',
    backgroundColor: "#fafafa",
    marginTop: '7%',
  }, 
}));

function App() {

  const classes = useStyles();

  return (
    <div>
        <Grid container >
          <Grid className={classes.welcomeGridOut}>
            <Grid className={classes.welcomeGridIn}>
              <Welcome></Welcome>
            </Grid>
          </Grid>
        </Grid>
        <Container>
          <Grid container>
            <Grid id="about" item className={classes.aboutGridOut}>
              <Grid className={classes.aboutGridIn}>
                <About></About>
              </Grid>
            </Grid>
            <Grid id="resume">
                <Resume></Resume>
            </Grid>
          </Grid>
        </Container>
        <Grid id="contact" item className={classes.contactGrid}>
          <Contact></Contact>
        </Grid>
    </div>
  )
}

export default App;