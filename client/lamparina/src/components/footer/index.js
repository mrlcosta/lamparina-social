import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.primary,
  },
  p: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
    paddingLeft: '10px',
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>About us</Paper>

          <Grid item sm={12}>
            <p className={classes.p}>11643 Ruthelen St</p>

            <p className={classes.p}>Los Angeles, California(CA), 90047</p>

            <p className={classes.p}>Nort America, US</p>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>Talk to us</Paper>
          <p className={classes.p}>Work with us</p>
          <p className={classes.p}>contact@lamparina.com</p>
          <p className={classes.p}>(323) 754-4973</p>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>Others Services </Paper>
          <p className={classes.p}>Social Media</p>
          <p className={classes.p}>marketing@lamparina.com</p>
          <p className={classes.p}>LinkedIn</p>
        </Grid>
      </Grid>
    </div>
  );
}
