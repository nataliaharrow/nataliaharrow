import React from 'react';
import '../App.css';
import './Welcome.css';
import Image from '../backgroundPic2.jpeg';
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
        gridImage: {
            backgroundImage: `url(${Image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: `calc(100vw + 48px)`,
            height: `calc(50vw + 10px)`,
            margin: -24,
            padding: 24,
            boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.2)'
        }, 
        gridContainer: {
            marginLeft: '20vw',
            marginTop: '21vw'
        },
        titleName: {
            color: "#fff",
            fontSize: "3.9vw",
            fontFamily: "BlinkMacSystemFont",
            marginBottom: '-1.5vw'
        },
        intro: {
            marginTop: '0vw',
            marginBottom: '3vw',
            marginLeft: '.5vw',
            color: '#fff',
            fontSize: '1.4vw',
        },
        links: {
            marginLeft: '6vw',
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