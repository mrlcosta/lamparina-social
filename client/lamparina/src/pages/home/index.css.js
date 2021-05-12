import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  body: {
    backgroundColor: '#cfefff',
    // height: '95vh',
    // width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bodyHome: {
    backgroundColor: '#cfefff',
    height: '95vh',
    // width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imgLogo: {
    marginTop: '20px',
    height: '130px',
  },
  h2Title: {
    paddingTop: '10px',
  },
  autocomplete: {
    width: '40vh',
  },
  h4subtitle: {
    paddingTop: '30px',
  },
  Button: {
    marginRight: '10px',
    width: '100px',
    marginBottom: '40px',
  },
}));

export default useStyles;
