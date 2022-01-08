import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      border: 0,
      color: 'white',
      height: 48,
    },
  },
}));

function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="/#about">About</Link>
      <Link href="/#resume">Resume</Link>
      <Link href="/#contact">Contact</Link>
    </div>
  );
}

export default Menu;