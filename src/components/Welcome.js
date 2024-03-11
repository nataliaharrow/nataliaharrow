import React from 'react';
import '../App.css';
import './Welcome.css';
import smoothscroll from 'smoothscroll-polyfill';
import {CardMedia, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { HashLink as Link } from 'react-router-hash-link';
import image from '../photo3.jpg';

smoothscroll.polyfill();

const useStyles = makeStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 .1vw',
      transform: 'scale(0.1)',
    },
    photo: {
        height: 450,
        width: 350,
    },
  });

function Welcome() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const styles = {
        section : {
            marginTop: '1vw',
            marginLeft: '1vw',
        }
        ,
        titleName: {
            color: "#444343",
            fontSize: 60,
            fontFamily: "BlinkMacSystemFont",
            marginBottom: '-1.2vw'
        },
        intro: {
            marginTop: '1vw',
            marginBottom: '3vw',
            color: '#444343',
            fontSize: 22,
        },
        links: {
            // marginLeft: '6vw',
            fontSize: 20
        }
    };

    return (
        <Grid style={styles.section} container spacing={10}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <Grid>
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
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <CardMedia
                    className={classes.photo}
                    image={image}
                />
            </Grid>
        </Grid>
    );
}

export default Welcome;