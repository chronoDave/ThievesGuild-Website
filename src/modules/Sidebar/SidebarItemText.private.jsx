import React, {
  cloneElement,
  forwardRef
} from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

// Core
import { Typography } from '@material-ui/core';

import SidebarItem from './SidebarItem.private';

// Styles
import { useSidebarStyles } from './Sidebar.style';

const SidebarItemText = forwardRef((props, ref) => {
  const {
    icon,
    text,
    disableTranslation,
    ...rest
  } = props;

  const classes = useSidebarStyles();
  const { t } = useTranslation();

  return (
    <SidebarItem {...rest} ref={ref}>
      {cloneElement(icon, { classes: { root: classes.itemIcon } })}
      <Typography classes={{ root: classes.itemText }}>
        {!disableTranslation ? t(text) : text}
      </Typography>
    </SidebarItem>
  );
});

SidebarItemText.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  disableTranslation: PropTypes.bool
};

SidebarItemText.defaultProps = {
  disableTranslation: false
};

export default SidebarItemText;
