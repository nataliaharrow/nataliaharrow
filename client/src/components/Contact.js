import React from 'react';
import '@fontsource/roboto/300.css';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto/100.css';

const useStyles = makeStyles(() => ({
  title: {
      fontFamily: "Roboto",
      fontSize: 30,
      marginTop: "15%"
  },
  text: {
      fontFamily: "Roboto",
      fontSize: 20,
      lineHeight:3,
      marginTop: "8%"
  }, 
  placeholder: {
      color:  "#fafafa"
  }, 
  signature: {
      fontSize: 13,
      marginTop: "30%"
  }
}));


function Contact() {
  const classes = useStyles();

  return(
    <Container >
      <div className={classes.placeholder}> - </div>
      <Typography className={classes.title}>
          <b>Contact me</b>
      </Typography>
      <Typography className={classes.text}>
        <a href="https://www.linkedin.com/in/nataliaharrow/" target="_blank" rel="noreferrer" className="slide-left-right">LinkedIn</a><br/>
        <a href="https://github.com/nataliaharrow" target="_blank" rel="noreferrer" className="slide-left-right">GitHub</a><br/>
      </Typography>
      <Typography className={classes.signature}>
        © 2022 Natalia Harrow
      </Typography>
    </Container>
  )
}

export default Contact;