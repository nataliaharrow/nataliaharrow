import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 6px',
    transform: 'scale(1.5)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  bulletPoint: {
      fontSize: 16,
      marginBottom: 10,
  }
});

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(3),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography >{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}))(MuiDialogContent);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ExperienceDialog(props) {
  const classes = useStyles();
  
  const bull = <span className={classes.bullet}>•</span>;

  const bullets = props.description
  const bulletList = bullets.map((bullet) => 
    <Typography key={bullet} component="div">
        <Box className={classes.bulletPoint} >
            {bull}
            {bullet}
        </Box>
    </Typography>
  );

  return (
    <Dialog TransitionComponent={Transition} keepMounted onClose={props.handleClose} aria-labelledby="customized-dialog-title" aria-describedby="alert-dialog-slide-description" open={props.open}>
        <DialogTitle id="customized-dialog-title" onClose={props.handleClose} >
            <b><i>{props.title},</i></b> {props.company} <br/>
                {props.team ? (<>{props.team}<br/> </>) : (<></>)} 
            <Typography component={'span'} className={classes.title} color="textSecondary">
                {props.time} {bull} {props.location}
            </Typography>
        </DialogTitle>
        <DialogContent dividers>
            {bulletList}
        </DialogContent>
    </Dialog>
  );
}

export default ExperienceDialog;