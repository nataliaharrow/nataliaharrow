import React from 'react';
import Welcome from './components/Welcome';
import About from './components/About';
import Contact from './components/Contact';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Resume from './components/Resume';

const useStyles = makeStyles((theme) => ({
  welcomeGridOut: {
    width: '100vw',
    minHeight: '100vh',
  
  }, 
  welcomeGridIn: {
    marginTop: '10%',
    marginLeft: '20%',
    marginRight: '20%',
    marginBottom: '10%',
  }, 
  aboutGridOut: {
    width: '100vw',
    minHeight: '100vh',
    marginBottom: '23%',
    spacing: 10,
    justify: 'center',
    alignItems: 'center'
  }, 
  aboutGridIn: {
    marginTop: '5%',
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