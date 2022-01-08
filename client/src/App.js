import React from 'react';
import Welcome from './components/Welcome';
import { Grid } from '@material-ui/core';

function App() {

  return (
    <div>
        <Grid container >
          <Welcome></Welcome>
        </Grid>
    </div>
    
  )
}

export default App;