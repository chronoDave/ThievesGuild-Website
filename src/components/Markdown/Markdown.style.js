import { makeStyles } from '@material-ui/core/styles';

export const useMarkdownStyles = makeStyles(theme => ({
  code: {
    fontFamily: ['Roboto Mono', 'monospace'].join(','),
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
  },
  block: {
    padding: theme.spacing(2),
    whiteSpace: 'pre-wrap'
  },
  inline: {
    display: 'inline',
    padding: theme.spacing(0.5, 1)
  }
}));
