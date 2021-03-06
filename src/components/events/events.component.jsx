import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Event } from '../event/event.component';
import { EventsList } from '../../temp/events';


//Images
import doge from '../../assets/images/doge.png';

//Styles
import useStyles from './events.styles';

export default function Events(){

    const classes = useStyles();

    return(
        <Grid container 
            direction='row' 
            className={classes.eventsContainer}
            spacing={2}
            >
                <Grid item className={classes.itemGrid} xs={3}>A</Grid>
                <Grid item className={classes.itemGrid} xs={3}>A</Grid>
                <Grid item className={classes.itemGrid} xs={3}>A</Grid>
        </Grid>
    )

}