import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles({
  link: {
    fontSize: 15,
    marginBottom: 3,
    textAlign: "center",
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EducationDialog(props) {
  const classes = useStyles();
  
  return (
    <Dialog TransitionComponent={Transition} keepMounted onClose={props.handleClose} aria-labelledby="customized-dialog-title" aria-describedby="alert-dialog-slide-description" open={props.open}>
        <DialogContent dividers className={classes.link}>
            {props.description} <br/> <br/>
            {props.link}
        </DialogContent>
    </Dialog>
  );
}

export default EducationDialog;