import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import EducationDialog from './EducationDialog';

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
    fontSize: 19,
    marginBottom: 10,
},
  year: {
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 4,
  },
  bulletPoint: {
    fontSize: 15,
},
  pos: {
    marginTop: 3,
  },
});

function ResumeEducation() {

    const [open, setOpen] = React.useState(false);
    const [description, setDescription] = React.useState(null);
    const [link, setLink] = React.useState(null);

    const handleClickOpen = (description, link) => {
        setOpen(true);
        setDescription(description);
        setLink(link);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();
  
    const bull = <span className={classes.bullet}>•</span>;

    const GoogleBullet = "Selected as 1 of 20 female Computer Science students in North America, based on academic excellence and leadership potential."
    const GHCBullet = "Received full funding to attend 2018 Grace Hopper Conference."
    const FbBullet = "Selected as 1 of 30 students in NYC to attend a 10-week career workshop series."
    const WiTBullet = "Helped over three dozen students from underrepresented backgrounds acquire skills necessary to launch careers in tech by organizing workshops, personalized study sessions and guest talks from industry professionals.";
    const HSACBullet = "Encouraged dozens of students to pursue transfer to 4-year colleges by helping them access appropriate program and resource opportunities, and assist them in the application process.";

    const GoogleLink = <a href="https://docs.google.com/document/d/e/2PACX-1vRMfp-bkYg1yHGoU5DAa6jat1iD0VQhdXwfgGFw2AwqPOES6hT_jRVkXY9P1R3baSZI1bfcHKq8Gk-e/pub" target="_blank" rel="noreferrer" className="slide-left-right">2018 Google scholarship recipients</a>
    const FbLink = <a href="https://diversity.fb.com/initiatives/in-our-communities/" target="_blank" rel="noreferrer" className="slide-left-right">Facebook Above and Beyond Computer Science (ABCS)</a>
    const GHCLink = <a href="https://ghc.anitab.org/" target="_blank" rel="noreferrer" className="slide-left-right">Grace Hopper Celebration</a>
    const HSACLink = <a href="https://www.laguardiahonors.com/" target="_blank" rel="noreferrer" className="slide-left-right">Honors Student Adivosry Committee at LaGuardia Community College</a>

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="subtitle1" display="block" gutterBottom >
                    <b>EDUCATION</b>
                </Typography>
                <Divider />
            </CardContent>
            <CardContent >
            <Typography className={classes.year} color="textSecondary" >
                2018 - 2021 |  New York, NY
            </Typography>
            <Typography className={classes.title} variant="h6" component="h2">
            <i><b>B.S., Computer Science</b> </i> <br/> Grove School of Engineering | <b>The City College of New York</b>
            </Typography>
            <Typography component={'span'} className={classes.bulletPoint} color="textSecondary" >
                {bull} <b>Google</b> Women Techmakers Scholar 2018 
                <label htmlFor="icon-button-file">
                <IconButton onClick={() => handleClickOpen(GoogleBullet, GoogleLink)}>
                    <InfoIcon className="fa fa-plus-circle" fontSize="small" color="disabled"/>
                </IconButton>
                </label> <br/>
                { open ? (
                    <EducationDialog handleClose={handleClose} description={description} link={link} open={open}/>
                    ) : (<div></div>)
                }
                {bull} <b>Google</b> 2018 GHC Travel Grant Recipient 
                <label htmlFor="icon-button-file">
                <IconButton onClick={() => handleClickOpen(GHCBullet, GHCLink)}>
                    <InfoIcon className="fa fa-plus-circle" fontSize="small" color="disabled"/>
                </IconButton>
                </label> <br/>
                { open ? (
                    <EducationDialog handleClose={handleClose} description={description} link={link} open={open}/>
                    ) : (<div></div>)
                }
                {bull} <b>Facebook</b> Above and Beyond Computer Science Participant
                <label htmlFor="icon-button-file">
                <IconButton onClick={() => handleClickOpen(FbBullet, FbLink)}>
                    <InfoIcon className="fa fa-plus-circle" fontSize="small" color="disabled"/>
                </IconButton>
                { open ? (
                    <EducationDialog handleClose={handleClose} description={description} link={link} open={open}/>
                    ) : (<div></div>)
                }
                </label> <br/>
            </Typography>
        </CardContent>
        <CardContent >
            <Typography className={classes.year} color="textSecondary" >
                2016 - 2018 |  New York, NY
            </Typography>
            <Typography className={classes.title} variant="h6" component="h2">
            <i><b>A.S., Computer Science</b> </i> <br/><b>LaGuardia Community College</b>
            </Typography>
            <Typography component={'span'} className={classes.bulletPoint} color="textSecondary" >
                {bull} <b>Women in Technology Club</b>, President & Co-Founder 
                <label htmlFor="icon-button-file">
                <IconButton onClick={() => handleClickOpen(WiTBullet, null)}>
                    <InfoIcon className="fa fa-plus-circle" fontSize="small" color="disabled"/>
                </IconButton>
                </label> <br/>
                { open ? (
                    <EducationDialog handleClose={handleClose} description={description} link={link} open={open}/>
                    ) : (<div></div>)
                }
                {bull} <b>Honors Student Advisory Committee</b>, Key Member
                <label htmlFor="icon-button-file">
                <IconButton onClick={() => handleClickOpen(HSACBullet, HSACLink)}>
                    <InfoIcon className="fa fa-plus-circle" fontSize="small" color="disabled"/>
                </IconButton>
                { open ? (
                    <EducationDialog handleClose={handleClose} description={description} link={link} open={open}/>
                    ) : (<div></div>)
                }
                </label> <br/>
            </Typography>
        </CardContent>
    </Card>
  );
}

export default ResumeEducation;