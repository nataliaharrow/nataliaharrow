import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import '@fontsource/roboto/300.css';

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // border: "none",
        // boxShadow: "none",
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    text: {
        marginLeft:"2%",
        marginTop:"2%",
        fontFamily: "Roboto",
        fontSize:17,
        lineHeight:2,
    }
}));

export default function About() {
  const classes = useStyles();

  return (
    <Box>
        <div className={classes.details}>
            <CardContent className={classes.content}>
                <Typography variant="body1" className={classes.text}>
                Hello!
                <br/><br/> 
                My name is Natalia and I build things with code. My interest in technology started when in
                2014 I dropped out of law school and while searching for a new path, I discovered an online
                programming class. I fell in love with coding and enrolled in a CS program. Fast-forward to 
                today, and I hold a B.S. degree in Computer Science and work as a Software Engineer.
                <br/><br/>
                While at college, I interned at MediaMath, Major League Baseball, and New Relic, 
                where I returned to work full-time after graduation. I'm part of the Telemetry Data 
                Platform org where I work on large-scale data streaming pipelines and use technologies 
                like Java, Kafka, Kubernetes, Thrift, GraphQL, and more. I genuinely enjoy working 
                on complex technical problems and am passionate about helping students from 
                underrepresented backgrounds succeed in the tech world.
                <br/><br/>
                In my free time, I love exploring new restaurants and taking long walks around New 
                York City where I live with my husband and our sweet pup Ellie.
                <br/><br/> 
                Reach out and say hello - I'd love to connect!

                </Typography>
            </CardContent>
        </div>
    </Box>
  );
}