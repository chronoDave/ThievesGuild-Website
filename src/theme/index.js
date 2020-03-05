import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    grey: {
      900: '#2f2f2f',
      800: '#363636',
      700: '#434343',
      600: '#686868'
    }
  },
  dimensions: {
    sidebar: {
      desktop: 180,
      mobile: 60
    }
  },
  border: (color, width = 1, style = 'solid') => `${width}px ${style} ${color}`,
});
