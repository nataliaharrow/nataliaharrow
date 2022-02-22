import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';

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
    fontSize: 15,
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
  link: {
    fontSize: 15,
    marginBottom: 5,
    textAlign: "center",
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


function ResumeEducation() {

    const [googleBulletOpen, googleBulletSetOpen] = React.useState(false);
    const [ghcBulletOpen, ghcBulletSetOpen] = React.useState(false);
    const [fbBulletOpen, fbBulletSetOpen] = React.useState(false);
    const [witBulletOpen, witBulletSetOpen] = React.useState(false);
    const [hsacBulletOpen, hsacBulletSetOpen] = React.useState(false);

    const handleGoogleOpen = () => {
        googleBulletSetOpen(true);
      };
    
    const handleGoogleClose = () => {
        googleBulletSetOpen(false);
    };

    const handleGhcOpen = () => {
        ghcBulletSetOpen(true);
    };
    
    const handleGhcClose = () => {
        ghcBulletSetOpen(false);
    };

    const handleFbOpen = () => {
        fbBulletSetOpen(true);
    };
    
    const handleFbClose = () => {
        fbBulletSetOpen(false);
    };

    const handleWitClickOpen = () => {
        witBulletSetOpen(true);
    };
    
    const handleWitClose = () => {
        witBulletSetOpen(false);
    };

    const handleHsacOpen = () => {
        hsacBulletSetOpen(true);
    };
    
    const handleHsacClose = () => {
        hsacBulletSetOpen(false);
    };

    const classes = useStyles();
  
    const bull = <span className={classes.bullet}>•</span>;

    const GoogleBulletDescription = "Selected as 1 of 20 female Computer Science students in North America, based on academic excellence and leadership potential."
    const GhcBulletDescription = "Received full funding to attend 2018 Grace Hopper Conference."
    const FbBulletDescription = "Selected as 1 of 30 students in NYC to attend a 10-week career workshop series."
    const WitBulletDescription = "Helped over three dozen students from underrepresented backgrounds acquire skills necessary to launch careers in tech by organizing workshops, personalized study sessions and guest talks from industry professionals.";
    const HsacBulletDescription = "Encouraged dozens of students to pursue transfer to 4-year colleges by helping them access appropriate program and resource opportunities, and assist them in the application process.";

    const GoogleLink = <a href="https://docs.google.com/document/d/e/2PACX-1vRMfp-bkYg1yHGoU5DAa6jat1iD0VQhdXwfgGFw2AwqPOES6hT_jRVkXY9P1R3baSZI1bfcHKq8Gk-e/pub" target="_blank" rel="noreferrer" className="slide-left-right">2018 Google scholarship recipients</a>
    const FbLink = <a href="https://diversity.fb.com/initiatives/in-our-communities/" target="_blank" rel="noreferrer" className="slide-left-right">Facebook Above and Beyond Computer Science (ABCS)</a>
    const GhcLink = <a href="https://ghc.anitab.org/" target="_blank" rel="noreferrer" className="slide-left-right">Grace Hopper Celebration</a>
    const HsacLink = <a href="https://www.laguardiahonors.com/" target="_blank" rel="noreferrer" className="slide-left-right">Honors Student Advisory Committee at LaGuardia Community College</a>

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
                    2018 - 2021 | New York, NY
                </Typography>

                <Typography className={classes.title} variant="h6" component="h2">
                    <i><b>B.S., Computer Science</b> </i> <br/> Grove School of Engineering | <b>The City College of New York</b>
                </Typography>

                <Typography component={'span'} className={classes.bulletItem} color="textSecondary" >
                   
                    {bull} <b>Google</b> Women Techmakers Scholar 2018 
                    <IconButton onClick={handleGoogleOpen}>
                        <InfoIcon fontSize="small" color="disabled"/>
                    </IconButton>
                    <br/>
                    <Dialog 
                        open={googleBulletOpen}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleGoogleClose}
                        >
                        <DialogContent className={classes.link}>
                            {GoogleBulletDescription} <br/> <br/>
                            {GoogleLink}
                        </DialogContent>
                    </Dialog>

                    {bull} <b>Google</b> 2018 GHC Travel Grant Recipient 
                    <IconButton onClick={handleGhcOpen}>
                        <InfoIcon fontSize="small" color="disabled"/>
                    </IconButton>
                    <br/>
                    <Dialog 
                        open={ghcBulletOpen}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleGhcClose}
                        >
                        <DialogContent className={classes.link}>
                            {GhcBulletDescription} <br/> <br/>
                            {GhcLink}
                        </DialogContent>
                    </Dialog>

                    {bull} <b>Facebook</b> Above and Beyond Computer Science Participant
                    <IconButton onClick={handleFbOpen}>
                        <InfoIcon fontSize="small" color="disabled"/>
                    </IconButton>
                    <Dialog 
                        open={fbBulletOpen}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleFbClose}
                        >
                        <DialogContent className={classes.link}>
                            {FbBulletDescription} <br/> <br/>
                            {FbLink}
                        </DialogContent>
                    </Dialog>
                    <br/>

              </Typography>

            </CardContent>

            <CardContent >
            
                <Typography className={classes.year} color="textSecondary" >
                    2016 - 2018 | New York, NY
                </Typography>

                <Typography className={classes.title} variant="h6" component="h2">
                <i><b>A.S., Computer Science</b> </i> <br/><b>LaGuardia Community College</b>
                </Typography>

                <Typography component={'span'} className={classes.bulletItem} color="textSecondary" >
                
                    {bull} <b>Women in Technology Club</b>, President & Co-Founder 
                    <IconButton onClick={handleWitClickOpen}>
                        <InfoIcon fontSize="small" color="disabled"/>
                    </IconButton>
                    <br/>
                    <Dialog 
                        open={witBulletOpen}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleWitClose}
                    >
                        <DialogContent className={classes.link}>
                            {WitBulletDescription} 
                        </DialogContent>
                    </Dialog>

                    {bull} <b>Honors Student Advisory Committee</b>, Key Member
                    <IconButton onClick={handleHsacOpen}>
                        <InfoIcon fontSize="small" color="disabled"/>
                    </IconButton>
                    <Dialog 
                        open={hsacBulletOpen}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleHsacClose}
                    >
                        <DialogContent className={classes.link}>
                            {HsacBulletDescription} <br/> <br/>
                            {HsacLink}
                        </DialogContent>
                    </Dialog>
                    <br/>
                </Typography>

            </CardContent>
        </Card>
    );
}

export default ResumeEducation;