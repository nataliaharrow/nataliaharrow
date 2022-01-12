import React from 'react';
import '@fontsource/roboto/300.css';
import { Button, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto/100.css';
import Mailto from './Mailto';

const useStyles = makeStyles(() => ({
  title: {
      fontFamily: "Roboto",
      fontSize: 30,
      marginTop: "15%"
  },
  button: {
    marginTop: "8%",
  },
  text: {
      fontFamily: "Roboto",
      fontSize: 20,
      lineHeight:3,
      marginTop: "8%",
      marginLeft: "1%"
  }, 
  placeholder: {
      color:  "#fafafa"
  }, 
}));


function Contact() {
  const classes = useStyles();

  return(
    <Container >
      <div className={classes.placeholder}> - </div>
      <Typography className={classes.title} variant="h1" component="h2">
          <b>Contact me</b>
      </Typography>
      <Button className={classes.button} variant="outlined">
        <Mailto email="nataliaharrow@gmail.com" subject="Hello" body="">
          Send me an email
        </Mailto>
      </Button>
      <Typography className={classes.text} variant="h3" component="h3">
        <a href="https://www.linkedin.com/in/nataliaharrow/" target="_blank" rel="noreferrer" className="slide-left-right">LinkedIn</a><br/>
        <a href="https://github.com/nataliaharrow" target="_blank" rel="noreferrer" className="slide-left-right">GitHub</a><br/>
      </Typography>
    </Container>
  )
}

export default Contact;