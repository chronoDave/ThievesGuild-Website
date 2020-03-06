import { fade, makeStyles } from '@material-ui/core/styles';

export const useSidebarStyles = makeStyles(theme => ({
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: 0.4,
    height: theme.dimensions.sidebar.desktop / 2,
    width: '100%',
    transition: theme.transitions.create(
      ['opacity', 'background-color'],
      { duration: theme.transitions.duration.shortest }
    ),
    '&:hover': {
      opacity: 1,
      backgroundColor: theme.palette.grey[900]
    }
  },
  group: {
    writingMode: 'vertical-rl',
    display: 'inline-flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.grey[900],
    padding: theme.spacing(0, 0.5),
    color: fade('#ffffff', 0.4)
  },
  itemActive: {
    backgroundColor: theme.palette.grey[700],
    opacity: 1
  },
  itemActiveDivider: {
    position: 'absolute',
    left: theme.spacing(0.5),
    borderRadius: theme.shape.borderRadius,
    width: theme.spacing(0.25),
    height: `calc(100% - ${theme.spacing(2)}px)`,
    backgroundColor: 'white'
  },
  itemDivider: {
    height: 1,
    backgroundColor: theme.palette.grey[900],
    width: '100%'
  },
  itemIcon: {
    marginBottom: theme.spacing(0.5)
  },
  itemText: {
    fontSize: theme.typography.caption.fontSize,
    letterSpacing: 1
  },
  itemLink: {
    height: theme.dimensions.sidebar.desktop / 2.5
  },
  itemLinkDivider: {
    backgroundColor: theme.palette.grey[900],
    width: 1,
    flexShrink: 0
  },
}));
