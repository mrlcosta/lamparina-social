/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
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
import LoginContainer from '../login/index';
import RegisterContainer from '../register/index';

const useStyles = style;

export default function Home() {
  const history = useHistory();
  const classes = useStyles();
  const BrUF = [
    { uf: 'SP' },
    { uf: 'BA' },
    { uf: 'RJ' },
    { uf: 'MG' },
    { uf: 'MT' },
    { uf: 'MS' },
    { uf: 'AM' },
    { uf: 'PE' },
    { uf: 'CE' },
    { uf: 'ES' },
    { uf: 'AL' },
    { uf: 'SE' },
    { uf: 'DF' },
    { uf: 'GO' },
    { uf: 'PR' },
    { uf: 'SC' },
    { uf: 'RS' },
  ];
  const [container, setContainer] = useState('home');

  function loginClick() {
    // history.push('/login');
    setContainer('login');
  }

  function registerClick() {
    setContainer('register');
  }
  return (
    <div className={classes.root}>
      <MenuAppBar />

      {container === 'home' && (
        <div className={classes.bodyHome}>
          <img src={logo} alt="" className={classes.imgLogo} />
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            className={classes.h2Title}
          >
            Where are you?
          </Typography>

          <Autocomplete
            className={classes.autocomplete}
            id="UF"
            freeSolo
            options={BrUF.map((option) => option.uf)}
            renderInput={(params) => (
              <TextField
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...params}
                label="Estado"
                margin="normal"
                variant="outlined"
              />
            )}
          />
          <Typography
            variant="h4"
            component="h3"
            gutterBottom
            className={classes.h4subtitle}
          >
            More than 10.000.000 of users in SP!
          </Typography>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Button
              className={classes.Button}
              variant="outlined"
              color="primary"
              onClick={registerClick}
            >
              Sign Up
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
        </div>
      )}
      {container === 'login' && (
        <div className={classes.body}>
          <LoginContainer />
        </div>
      )}
      {container === 'register' && (
        <div className={classes.body}>
          <RegisterContainer />
        </div>
      )}

      <Footer />
    </div>
  );
}
