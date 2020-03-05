import React, { forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Core
import {
  Box,
  ButtonBase
} from '@material-ui/core';

// Styles
import { useSidebarStyles } from './Sidebar.style';

const SidebarItem = forwardRef((props, ref) => {
  const {
    children,
    className,
    active,
    ...rest
  } = props;
  const classes = useSidebarStyles();

  return (
    <Box width="100%" color="white">
      <ButtonBase
        className={clsx(
          classes.item,
          { [classes.itemActive]: active },
          className
        )}
        {...rest}
        ref={ref}
      >
        {active && <div className={classes.itemActiveDivider} />}
        {children}
      </ButtonBase>
      <div className={classes.itemDivider} />
    </Box>
  );
});

SidebarItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  active: PropTypes.bool
};

SidebarItem.defaultProps = {
  className: null,
  active: false
};

export default SidebarItem;
