import React from 'react';
import { useTranslation } from 'react-i18next';

// Icon
import IconTranslate from '@material-ui/icons/Translate';

// Core
import {
  Box,
  Tooltip
} from '@material-ui/core';

import { Icon } from '../../components';

import SidebarItem from './SidebarItem.private';
import SidebarItemText from './SidebarItemText.private';

// Styles
import { useSidebarStyles } from './Sidebar.style';

const SidebarItemLink = () => {
  const classes = useSidebarStyles();
  const { t, i18n: locale } = useTranslation();

  const isNativeLocale = locale.language === 'nl';

  return (
    <Box display="flex" width="100%">
      <Tooltip arrow title={t('action:change', { context: 'language' })}>
        <SidebarItemText
          className={classes.itemLink}
          disableTranslation
          text={isNativeLocale ? 'EN' : 'NL'}
          icon={<IconTranslate />}
          onClick={() => locale.changeLanguage(isNativeLocale ? 'en' : 'nl')}
        />
      </Tooltip>
      <div className={classes.itemLinkDivider} />
      <Tooltip arrow title="GitHub repository">
        <SidebarItem
          className={classes.itemLink}
          component="a"
          href="https://github.com/chronoDave/ThievesGuild-Website"
          target="_blank"
        >
          <Icon type="github" />
        </SidebarItem>
      </Tooltip>
    </Box>
  );
};

export default SidebarItemLink;
