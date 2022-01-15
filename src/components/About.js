import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from '../photo3.jpg';
import { Box } from '@material-ui/core';
import '@fontsource/roboto/300.css';

const useStyles = makeStyles((theme) => ({
    main: {
        minWidth:100,
        minHeight:100
    }, 
    root: {
        display: 'flex',
        border: "none",
        boxShadow: "none",
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    photo: {
        height: 300,
        width: 300,
        marginTop: "8%",
        marginBottom: "4%",
        alignSelf:"center",
        borderRadius:"50%",
    },
    title : {
        marginLeft:"20%",
        fontFamily: "Roboto",
    },
    text: {
        maxWidth:1000,
        marginLeft:"20%",
        marginTop:"2%",
        marginBottom: "10%",
        fontFamily: "Roboto",
        fontSize:17,
        lineHeight:2
    }
}));

export default function About() {
  const classes = useStyles();

  return (
    <Box>
        <CardMedia
            className={classes.photo}
            image={image}
        />
        <div className={classes.details}>
            <CardContent className={classes.content}>
            <Typography component="h6" variant="h6" className={classes.title}>
                Hi there!
            </Typography>
            <Typography variant="body1" className={classes.text}>
            I'm Natalia and I'm a Software Engineer. I live in New York City where I recently graduated 
            from the Grove School of Engineering at the City College of New York with a B.S. degree in Computer Science.
            While at college, I interned at MediaMath, Major League Baseball and New Relic - 
            the company where I returned to work full-time after graduation. I'm part of
            the Unified Data Streams team where I get to learn about the ins and outs of large-scale data streaming systems.
            I enjoy working on complex technical problems and I'm passionate about helping students from underrepresented backgrounds
            succeed in the tech world. <br/>
            I love traveling and exploring new restaurants. I am a New Yorker at heart but dream about moving to Southern California 
            in the future! Meanwhile, I love living in Brooklyn with my husband and our sweet pup Ellie. <br/>
            Reach out and say hello - I'd love to connect!
            </Typography>
            </CardContent>
        </div>
    </Box>
  );
}