import React from 'react';
import '../App.css';
import './Welcome.css';
import smoothscroll from 'smoothscroll-polyfill';
import {Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { HashLink as Link } from 'react-router-hash-link';

smoothscroll.polyfill();

const useStyles = makeStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 .1vw',
      transform: 'scale(0.1)',
    },
  });

function Welcome() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const styles = {
        titleName: {
            color: "#444343",
            fontSize: 80,
            fontFamily: "BlinkMacSystemFont",
            marginBottom: '-1.2vw'
        },
        intro: {
            marginTop: '0vw',
            marginBottom: '3vw',
            marginLeft: '.5vw',
            color: '#444343',
            fontSize: 27,
        },
        links: {
            marginLeft: '6vw',
            fontSize: 20
        }
    };

    return (
        <Grid container style={styles.gridImage}>
            <Grid style={styles.gridContainer}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography style={styles.titleName} variant="subtitle1" gutterBottom>
                    <b>Natalia Harrow</b>
                    </Typography>
                    <Typography style={styles.intro} color="textSecondary">
                        <b>Software Engineer,</b> <i>currently at<mark className="blue"> <a href="https://newrelic.com/" target="_blank" rel="noreferrer" className="slide-left-right"> New Relic</a></mark></i>
                    </Typography>
                    <Grid style={styles.links}>
                        <Link smooth to="#about" className="slide-left-right-white"> about </Link>
                        {bull}
                        <Link smooth to="#resume" className="slide-left-right-white"> resume </Link> 
                        {bull}
                        <Link smooth to="#contact" className="slide-left-right-white"> contact </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Welcome;