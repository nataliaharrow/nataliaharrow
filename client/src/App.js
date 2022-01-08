import React from 'react';
import Welcome from './components/Welcome';
import About from './components/About';
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
    </div>
    
  )
}

export default App;