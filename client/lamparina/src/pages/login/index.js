/* eslint-disable no-unused-vars */
import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/footer/index';
import MenuAppBar from '../../components/app_bar/index';
import logo from '../../assets/images/flame_blue.png';
import style from './index.css';

const useStyles = style;

export default function LoginContainer() {
  const history = useHistory();
  const classes = useStyles();

  function loginClick() {
    // history.push('/login');
  }

  return (
    <div className={classes.containerLogin}>
      <Typography component="div" className={classes.TypographyDiv}>
        <img src={logo} alt="" className={classes.imgLogo} />

        <Typography
          variant="h4"
          component="h3"
          gutterBottom
          className={classes.h4subtitle}
        >
          Login
        </Typography>

        <TextField
          required
          id="outlined-required"
          label="Username"
          defaultValue=""
          variant="outlined"
          className={classes.textField}
        />

        <TextField
          className={classes.textField}
          error
          helperText="Incorrect entry."
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />

        <div className={classes.divButton}>
          <Button className={classes.Button} variant="outlined" color="primary">
            Register
          </Button>

          <Button
            className={classes.Button}
            variant="outlined"
            color="primary"
            onClick={loginClick}
          >
            Login
          </Button>
        </div>
      </Typography>
    </div>
  );
}
