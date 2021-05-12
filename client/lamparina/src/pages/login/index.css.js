import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  containerLogin: {
    backgroundColor: '#c0ffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40vw',
    marginTop: '40px',
    marginBottom: '40px',
    minWidth: '500px',
    borderRadius: 50,
  },
  divButton: {
    display: 'flex',
    alignItems: 'center',
  },
  TypographyDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imgLogo: {
    marginTop: '20px',
    height: '130px',
    marginBottom: '20px',
  },
  Button: {
    marginRight: '10px',
    marginBottom: '20px',
    marginTop: '20px',
    width: '100px',
  },
  textField: { marginTop: '10px' },
}));

export default useStyles;
