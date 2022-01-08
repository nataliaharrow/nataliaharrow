
   
import React from 'react';
import '../App.css';
import './Welcome.css';
import Menu from './Menu'
import { Grid } from '@material-ui/core';



function Welcome() {
    return (
        <div className='main-container'>
            <h1>
                Natalia Harrow
            </h1>
            <p>
            Software Engineer, <i>currently at<mark className="blue"> <a href="https://newrelic.com/" target="_blank" rel="noreferrer" className="slide-left-right"> New Relic</a></mark></i>
            </p>
            <Grid>
                <Menu></Menu>
            </Grid>
        </div>
    );
}

export default Welcome;