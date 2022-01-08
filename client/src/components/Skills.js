import { Divider, makeStyles } from '@material-ui/core';
import { Grid, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginLeft:"1%",
      border: "none",
      boxShadow: "none" 
    },
    skillsList: {
      fontSize: 18,
      marginLeft: 10,
  },
    year: {
      fontSize: 14,
      marginBottom: 5,
      marginLeft: 10,
    },
  });

function Skills() {
    
    const classes = useStyles();

    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="subtitle1" gutterBottom >
                 <b>SKILLS</b>
                </Typography>
                <Divider />
            </Grid>
            <Grid container item xs={3} s={3} m={3} lg={3} direction="column">
                <Typography className={classes.year} color="textSecondary">
                    LAGNUAGES
                </Typography>
                <Typography className={classes.skillsList}>
                    Java <br/>
                    Python <br/>
                    C++ <br/>
                    JavaScript <br/>
                </Typography>
            </Grid>
            <Grid container item xs={3} s={3} m={3} lg={3} direction="column">
                <Typography className={classes.year} color="textSecondary" >
                    TOOLS AND FRAMEWORKS
                </Typography>
                <Typography className={classes.skillsList}>
                    Kafka <br/>
                    React.js <br/>
                    Django <br/>
                    Git <br/>
                    Spring <br/>
                    SpringBoot <br/>
                    MySQL <br/>
                    Node.js <br/>
                </Typography>
            </Grid>
            <Grid item xs={3} s={3} m={3} lg={3}><div></div></Grid>
            <Grid item xs={3} s={3} m={3} lg={3}><div></div></Grid>
        </Grid>
    );
}

export default Skills;