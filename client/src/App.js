import React from 'react';
import Welcome from './components/Welcome';
import About from './components/About';
import ResumeExperience from './components/ResumeExperience';
import ResumeEducation from './components/ResumeEducation';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  aboutGridOut: {
    width: '100vw',
    minHeight: '100vh',
    spacing: 10,
    justify: 'center',
    alignItems: 'center'
  }, 
  aboutGridIn: {
    marginTop: '4%',
    // marginBottom: '5%'
  }, 
  contactGrid: {
    width: '100vw',
    height: '100vh',
    justify: 'center',
    alignItems: 'center',
    backgroundColor: "#fafafa",
    marginTop: '4%'
  }, 
}));

function App() {

  const classes = useStyles();

  return (
    <div>
        <Grid container >
          <Welcome></Welcome>
        </Grid>
        <Container>
          <Grid container>
            <Grid id="about" item className={classes.aboutGridOut}>
              <Grid className={classes.aboutGridIn}>
                <About></About>
              </Grid>
            </Grid>
            <Grid id="resume" item xs={12} sm={12} md={12} lg={6}>
              <ResumeExperience></ResumeExperience>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <ResumeEducation></ResumeEducation>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Skills></Skills>
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