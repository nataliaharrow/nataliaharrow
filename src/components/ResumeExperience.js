import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';

import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';

import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border: "none",
    boxShadow: "none" 
  },
  bullet: {
    display: 'inline-block',
    margin: '0 6px',
    transform: 'scale(1.5)',
  },
  bulletItem: {
    fontSize: 16,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
  },
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
        <IconButton className={classes.closeButton} onClick={onClose}>
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

function ResumeExperience() {
  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;

  const [nrFullTimeopen, setNrFullTimeOpen] = React.useState(false);
  const [nrInternOpen, setNrInternOpen] = React.useState(false);
  const [mlbOpen, setMlbOpen] = React.useState(false);
  const [mmOpen, setMmOpen] = React.useState(false);

  const handleNrFullTimeOpen = () => {
    setNrFullTimeOpen(true);
  };

  const handleNrFullTimeClose = () => {
    setNrFullTimeOpen(false);
  };
  
  const handleNrInternOpen = () => {
    setNrInternOpen(true);
  };

  const handleNrInternClose = () => {
    setNrInternOpen(false);
  };

  const handleMlbOpen = () => {
    setMlbOpen(true);
  };

  const handleMlbClose = () => {
    setMlbOpen(false);
  };

  const handleMmOpen = () => {
    setMmOpen(true);
  };

  const handleMmClose = () => {
    setMmOpen(false);
  };

  const NrFullTimeDescription = [
    "Member of the Unified Data Streams team where I get to work on Tier 1 distributed data streaming systems powering New Relic Alerts product.", 
    "I use Java and Kafka to build and improve services that aggregate, filter, transform and export large quantities of real-time data.",
    "I participate in my team's on-call rotation. I am a sole pager holder during one-week long shifts when I respond to pages, triage, mitigate and resolve incidents.",
    "I improved my team's on-call process by creating a comprehensive on-call guide and several runbooks, and providing on-call training to new team members."
  ]

  const NrInternDescription = ["Improved my team's performance monitoring Java library by designing, implementing and releasing a new API that reduces the costs of monitoring.", 
    "Refactored parts of New Relic's streaming services code base to integrate the API and monitor its impact.",
    "Led a workshop for fellow interns and employees on Streaming Systems at New Relic.",
    "Completed summer intern project ahead of schedule and proceeded to collaborate with engineering team on designing solutions to solve architectural issues of the monitoring library."
  ]

  const mlbDescription = ["Designed, implemented and tested a feature that efficiently searched through 20k+ emails in the Draft Prospect Link (MLB’s amateur tracking system) and detected over 500 invalid addresses.",
    "Implemented a feature that automatically notifies Draft Prospect Link users of invalid email addresses.",
    "Took 1st place (out of 10 teams) in the MLB Intern Case Study Team Challenge, where I delivered a plan on how to successfully increase Employee Engagement across corporate and Advanced Media offices.",
  ]

  const mmDescription = ["Chosen among hundreds of applicants to take part in an intensive winter break coding internship.",
    "Successfully developed an automated deployment log of the latest software releases that goes out to management."
  ]

  function bulletList(items) {
    const bullets = items.map((item) => 
      <Typography key={item} component="div">
          <Box className={classes.bulletItem} >
            {bull}
            {item}
          </Box>
      </Typography> 
    );

    return bullets;
  }

  return (
    <Card className={classes.root}>
        <CardContent>
            <Typography variant="subtitle1" display="block" gutterBottom >
                <b>EXPERIENCE</b>
            </Typography>
            <Divider />
        </CardContent>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" >
            June 2021 - Present
        </Typography>
        <Typography className={classes.title} color="textSecondary" >
            New York, NY {bull} Remote
        </Typography>
        <Typography variant="h6" component="h2">
            <b>Software Engineer</b> at <i>New Relic </i>
              <IconButton onClick={() => handleNrFullTimeOpen()}>
                <InfoIcon className="fa fa-plus-circle" fontSize="small" color="disabled"/>
              </IconButton>
          <Dialog 
            TransitionComponent={Transition} 
            keepMounted 
            onClose={handleNrFullTimeClose} 
            open={nrFullTimeopen}>
            <DialogTitle id="customized-dialog-title" onClose={handleNrFullTimeClose} >
                <b><i>Software Engineer,</i></b> New Relic <br/>
                Unified Data Streams Team <br></br>
              <Typography component={'span'} className={classes.title} color="textSecondary">
                June 2021 - Present {bull} New York, NY (Remote)
              </Typography>
            </DialogTitle>
            <DialogContent dividers>
              {bulletList(NrFullTimeDescription)}
            </DialogContent>
          </Dialog>
        </Typography>
      </CardContent>

      <CardContent >
        <Typography className={classes.title} color="textSecondary" >
          June 2020 - September 2020
        </Typography>
        <Typography className={classes.title} color="textSecondary" >
          New York, NY {bull} Remote
        </Typography>
        <Typography variant="h6" component="h2">
            <b>Software Engineering Intern</b> at <i>New Relic </i>
            <IconButton onClick={() => handleNrInternOpen()}>
              <InfoIcon className="fa fa-plus-circle" fontSize="small" color="disabled"/>
            </IconButton>
          <Dialog 
            TransitionComponent={Transition} 
            keepMounted 
            onClose={handleNrInternClose}
            open={nrInternOpen}>
            <DialogTitle id="customized-dialog-title" onClose={handleNrInternClose}>
                <b><i>Software Engineering Intern,</i></b> New Relic <br/>
                Unified Data Streams Team <br></br>
              <Typography component={'span'} className={classes.title} color="textSecondary">
                June 2020 - September 2020 {bull} New York, NY (Remote)
              </Typography>
            </DialogTitle>
            <DialogContent dividers>
              {bulletList(NrInternDescription)}
            </DialogContent>
          </Dialog>
        </Typography>
      </CardContent>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" >
          June 2019 - August 2019
        </Typography>
        <Typography className={classes.title} color="textSecondary" >
          New York, NY
        </Typography>
        <Typography variant="h6" component="h2">
          <b>Enterprise Technology Intern</b> at <i>Major League Baseball </i>
            <IconButton onClick={() => handleMlbOpen()}>
              <InfoIcon className="fa fa-plus-circle" fontSize="small" color="disabled"/>
            </IconButton>
          <Dialog 
            TransitionComponent={Transition} 
            keepMounted 
            onClose={handleMlbClose} 
            open={mlbOpen}>
            <DialogTitle id="customized-dialog-title" onClose={handleMlbClose}>
              <b><i>Enterprise Technology Intern,</i></b> Major League Baseball <br/>
                  Enterprise Technology Team
              <Typography component={'span'} className={classes.title} color="textSecondary">
                June 2019 - August 2019 {bull} New York, NY
              </Typography>
            </DialogTitle>
            <DialogContent dividers>
              {bulletList(mlbDescription)}
            </DialogContent>
          </Dialog>
        </Typography>
      </CardContent>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" >
          January 2018
        </Typography>
        <Typography className={classes.title} color="textSecondary" >
          New York, NY
        </Typography>
        <Typography variant="h6" component="h2">
            <b>Software Engineering Intern</b> at <i>MediaMath </i>
            <IconButton onClick={() => handleMmOpen()}>
              <InfoIcon className="fa fa-plus-circle" fontSize="small" color="disabled"/>
            </IconButton>
          <Dialog 
            TransitionComponent={Transition} 
            keepMounted 
            onClose={handleMmClose} 
            open={mmOpen}>
            <DialogTitle id="customized-dialog-title" onClose={handleMmClose}>
              <b><i>Software Engineering Intern,</i></b> MediaMath <br/>
              <Typography component={'span'} className={classes.title} color="textSecondary">
                January 2018 {bull} New York, NY
              </Typography>
            </DialogTitle>
            <DialogContent dividers>
              {bulletList(mmDescription)}
            </DialogContent>
          </Dialog>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ResumeExperience;