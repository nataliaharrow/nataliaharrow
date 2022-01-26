import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import ExperienceDialog from './ExperienceDialog';

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
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function ResumeExperience() {
  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState(null);
  const [company, setCompany] = React.useState(null);
  const [team, setTeam] = React.useState(null);
  const [time, setTime] = React.useState(null);
  const [location, setLocation] = React.useState(null);
  const [description, setDescription] = React.useState(null);

  const handleClickOpen = (title, company, team, time, location, description) => {
    setOpen(true);
    setTitle(title);
    setCompany(company);
    setTeam(team);
    setTime(time);
    setLocation(location);
    setDescription(description);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const NRFullTimeDescription = ["Part of the Unified Data Streams team where I learn about the ins and outs of a large scale data streaming systems.", 
    "Participate in the team's on-call rotation - I am a sole pager holder during one-week long shifts. I respond to pages, triage, mitigate and resolve incidents or act as an Incident Comander responsible for all communication and coordination around the incident."
  ]

  const NRInternDescription = ["Improved my team's performance monitoring Java library by designing, implementing and releasing a new API that reduces the costs of monitoring.", 
    "Refactored parts of New Relic's streaming services code base to integrate the API and monitor its impact.",
    "Led a workshop for fellow interns and employees on Streaming Systems at New Relic.",
    "Completed summer intern project ahead of schedule and proceeded to collaborate with engineering team on designing solutions to solve architectural issues of the monitoring library."
  ]

  const MLBDescription = ["Designed, implemented and tested a feature that efficiently searched through 20k+ emails in the Draft Prospect Link (MLB’s amateur tracking system) and detected over 500 invalid addresses.",
    "Implemented a feature that automatically notifies Draft Prospect Link users of invalid email addresses.",
    "Took 1st place (out of 10 teams) in the MLB Intern Case Study Team Challenge, where I delivered a plan on how to successfully increase Employee Engagement across corporate and Advanced Media offices.",
  ]

  const MMDescription = ["Chosen among hundreds of applicants to take part in an intensive winter break coding internship.",
    "Successfully developed an automated deployment log of the latest software releases that goes out to management."
  ]

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
            <IconButton onClick={() => handleClickOpen('Software Engineer', 'New Relic', 'Unified Data Streams Team', 'June 2021 - Present', 'New York, NY (Remote)', NRFullTimeDescription)}>
              <InfoIcon className="fa fa-plus-circle" fontSize="small" color="disabled"/>
            </IconButton>
          </label>
          { open ? (
            <ExperienceDialog handleClose={handleClose} title={title} company={company} team={team} time={time} location={location} description={description} open={open}/>
          ) : (<div></div>)
          }
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
            <IconButton onClick={() => handleClickOpen('Software Engineering Intern', 'New Relic', 'Unified Data Streams Team', 'June 2020 - September 2020', 'New York, NY (Remote)', NRInternDescription)}>
              <InfoIcon className="fa fa-plus-circle" fontSize="small" color="disabled"/>
            </IconButton>
          </label>
          { open ? (
            <ExperienceDialog handleClose={handleClose} title={title} company={company} team={team} time={time} location={location} description={description} open={open}/>
          ) : (<div></div>)
          }
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
            <IconButton onClick={() => handleClickOpen('Enterprise Technology Intern', 'Major League Baseball', 'Enterprise Technology Team', 'June 2019 - August 2019', 'New York, NY', MLBDescription)}>
              <InfoIcon className="fa fa-plus-circle" fontSize="small" color="disabled"/>
            </IconButton>
          </label>
          { open ? (
            <ExperienceDialog handleClose={handleClose} title={title} company={company} team={team} time={time} location={location} description={description} open={open}/>
          ) : (<div></div>)
          }
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
            <IconButton onClick={() => handleClickOpen('Software Engineering Intern', 'MediaMath', null, 'January 2018', 'New York, NY', MMDescription)}>
              <InfoIcon className="fa fa-plus-circle" fontSize="small" color="disabled"/>
            </IconButton>
          </label>
          { open ? (
            <ExperienceDialog handleClose={handleClose} title={title} company={company} team={team} time={time} location={location} description={description} open={open}/>
          ) : (<div></div>)
          }
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ResumeExperience;