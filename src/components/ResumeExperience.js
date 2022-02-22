import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border: "none",
    boxShadow: "none" 
  },
  dialogRoot: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 6px',
    transform: 'scale(1.5)',
  },
  bulletPoint: {
    fontSize: 16,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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
    <MuiDialogTitle disableTypography className={classes.dialogRoot} {...other}>
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

function ResumeExperience() {
  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;

  const [nrFullTimeopen, setNrFullTimeOpen] = React.useState(false);
  const [nrInternOpen, setNrInternOpen] = React.useState(false);
  const [mlbOpen, setMlbOpen] = React.useState(false);
  const [mmOpen, setMmOpen] = React.useState(false);

  const handleNrFullTimeClickOpen = () => {
    setNrFullTimeOpen(true);
  };

  const handleNrFullTimeClose = () => {
    setNrFullTimeOpen(false);
  };
  
  const handleNrInternClickOpen = () => {
    setNrInternOpen(true);
  };

  const handleNrInternClose = () => {
    setNrInternOpen(false);
  };

  const handleMlbClickOpen = () => {
    setMlbOpen(true);
  };

  const handleMlbClose = () => {
    setMlbOpen(false);
  };

  const handleMmClickOpen = () => {
    setMmOpen(true);
  };

  const handleMmClose = () => {
    setMmOpen(false);
  };

  const NrFullTimeDescription = ["Part of the Unified Data Streams team where I learn about the ins and outs of a large scale data streaming systems.", 
    "Participate in the team's on-call rotation - I am a sole pager holder during one-week long shifts. I respond to pages, triage, mitigate and resolve incidents or act as an Incident Comander responsible for all communication and coordination around the incident."
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

  const nrFullTimeBulletList = NrFullTimeDescription.map((item) => 
    <Typography key={item} component="div">
        <Box className={classes.bulletPoint} >
            {bull}
            {item}
        </Box>
    </Typography>
  );

  const nrInternBulletList = NrInternDescription.map((item) => 
    <Typography key={item} component="div">
        <Box className={classes.bulletPoint} >
            {bull}
            {item}
        </Box>
    </Typography>
  );

  const mlbBulletList = mlbDescription.map((item) => 
  <Typography key={item} component="div">
      <Box className={classes.bulletPoint} >
          {bull}
          {item}
      </Box>
  </Typography>
);

const mmBulletList = mmDescription.map((item) => 
<Typography key={item} component="div">
    <Box className={classes.bulletPoint} >
        {bull}
        {item}
    </Box>
</Typography>
);

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
            <label htmlFor="icon-button-file">
            <IconButton onClick={() => handleNrFullTimeClickOpen()}>
              <InfoIcon className="fa fa-plus-circle" fontSize="small" color="disabled"/>
            </IconButton>
          </label>
          <Dialog 
            TransitionComponent={Transition} 
            keepMounted onClose={handleNrFullTimeClose} 
            aria-labelledby="customized-dialog-title" 
            aria-describedby="alert-dialog-slide-description" 
            open={nrFullTimeopen}>
            <DialogTitle id="customized-dialog-title" onClose={handleNrFullTimeClose} >
                <b><i>Software Engineer,</i></b> New Relic <br/>
                  Unified Data Streams Team <br></br>
                <Typography component={'span'} className={classes.title} color="textSecondary">
                June 2021 - Present {bull} New York, NY (Remote)
                </Typography>
            </DialogTitle>
            <DialogContent dividers>
                {nrFullTimeBulletList}
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
            <label htmlFor="icon-button-file">
            <IconButton onClick={() => handleNrInternClickOpen()}>
              <InfoIcon className="fa fa-plus-circle" fontSize="small" color="disabled"/>
            </IconButton>
          </label>
          <Dialog 
            TransitionComponent={Transition} 
            keepMounted 
            onClose={handleNrInternClose}
            aria-labelledby="customized-dialog-title" 
            aria-describedby="alert-dialog-slide-description" 
            open={nrInternOpen}>
            <DialogTitle id="customized-dialog-title" onClose={handleNrInternClose}>
                <b><i>Software Engineering Intern,</i></b> New Relic <br/>
                  Unified Data Streams Team <br></br>
                <Typography component={'span'} className={classes.title} color="textSecondary">
                  June 2020 - September 2020 {bull} New York, NY (Remote)
                </Typography>
            </DialogTitle>
            <DialogContent dividers>
                {nrInternBulletList}
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
            <label htmlFor="icon-button-file">
            <IconButton onClick={() => handleMlbClickOpen()}>
              <InfoIcon className="fa fa-plus-circle" fontSize="small" color="disabled"/>
            </IconButton>
          </label>
          <Dialog 
            TransitionComponent={Transition} 
            keepMounted onClose={handleMlbClose} 
            aria-labelledby="customized-dialog-title" 
            aria-describedby="alert-dialog-slide-description" 
            open={mlbOpen}>
            <DialogTitle id="customized-dialog-title" onClose={handleMlbClose}>
                <b><i>Enterprise Technology Intern,</i></b> Major League Baseball <br/>
                    Enterprise Technology Team
                <Typography component={'span'} className={classes.title} color="textSecondary">
                    June 2019 - August 2019 {bull} New York, NY
                </Typography>
            </DialogTitle>
            <DialogContent dividers>
                {mlbBulletList}
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
            <label htmlFor="icon-button-file">
            <IconButton onClick={() => handleMmClickOpen()}>
              <InfoIcon className="fa fa-plus-circle" fontSize="small" color="disabled"/>
            </IconButton>
          </label>
          <Dialog 
            TransitionComponent={Transition} 
            keepMounted onClose={handleMmClose} 
            aria-labelledby="customized-dialog-title" 
            aria-describedby="alert-dialog-slide-description" 
            open={mmOpen}>
            <DialogTitle id="customized-dialog-title" onClose={handleMmClose}>
                <b><i>Software Engineering Intern,</i></b> MediaMath <br/>
                <Typography component={'span'} className={classes.title} color="textSecondary">
                  January 2018 {bull} New York, NY
                </Typography>
            </DialogTitle>
            <DialogContent dividers>
                {mmBulletList}
            </DialogContent>
        </Dialog>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ResumeExperience;