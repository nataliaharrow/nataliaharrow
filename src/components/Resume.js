import React from 'react';
import ResumeExperience from './ResumeExperience';
import ResumeEducation from './ResumeEducation';
import Skills from './Skills';
import { Container, Grid } from '@material-ui/core';


function Resume() {
  return (
    <div>
        <Container>
          <Grid container>
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
    </div>
    
  )
}

export default Resume;