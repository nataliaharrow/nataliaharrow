import React from 'react';
import Welcome from './components/Welcome';
import About from './components/About';
import ResumeExperience from './components/ResumeExperience';
import ResumeEducation from './components/ResumeEducation';
import { Grid } from '@material-ui/core';

function App() {

  return (
    <div>
        <Grid container >
          <Welcome></Welcome>
        </Grid>
        <Grid>
          <About></About>
        </Grid>
        <Grid>
          <ResumeExperience></ResumeExperience>
        </Grid>
        <Grid>
          <ResumeEducation></ResumeEducation>
        </Grid>
    </div>
    
  )
}

export default App;