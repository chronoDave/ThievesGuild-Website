import { makeStyles } from '@material-ui/core/styles';

export const useAppStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: 1,
    overflow: 'auto'
  },
  desktop: {
    marginLeft: theme.dimensions.sidebar.desktop
  },
  mobile: {
    marginTop: theme.dimensions.sidebar.mobile
  },
  appbar: {
    position: 'fixed',
    width: '100%',
    height: theme.dimensions.sidebar.mobile
  },
  sidebar: {
    position: 'fixed',
    width: theme.dimensions.sidebar.desktop,
    height: '100%',
    overflow: 'auto',
    backgroundColor: theme.palette.grey[800]
  }
}));
