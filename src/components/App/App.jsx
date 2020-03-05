import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Core
import { useTheme } from '@material-ui/core/styles';
import {
  Box,
  Hidden,
  useMediaQuery
} from '@material-ui/core';

// Styles
import { useAppStyles } from './App.style';

const App = ({ children, sidebar, appbar }) => {
  const classes = useAppStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      overflow="hidden"
    >
      <Hidden smDown>
        <div className={classes.sidebar}>
          {sidebar}
        </div>
      </Hidden>
      <Hidden mdUp>
        <div className={classes.appbar}>
          {appbar}
        </div>
      </Hidden>
      <div
        className={clsx(
          classes.root,
          {
            [classes.desktop]: !isMobile,
            [classes.mobile]: isMobile
          }
        )}
      >
        {children}
      </div>
    </Box>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
  sidebar: PropTypes.element.isRequired,
  appbar: PropTypes.element.isRequired
};

export default App;
