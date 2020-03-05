import React, { Fragment } from 'react';
import { Location } from '@reach/router';

// Icons
import IconHome from '@material-ui/icons/Home';
import IconResearch from '@material-ui/icons/Assessment';

// Core
import { Box } from '@material-ui/core';

import { Logo } from '../../components';

import SidebarItem from './SidebarItem.private';
import SidebarItemLink from './SidebarItemLink.private';
import SidebarItemText from './SidebarItemText.private';

// Utils
import { PATH } from '../../utils/const';

const Sidebar = () => (
  <Fragment>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100%"
      bgcolor="grey.800"
    >
      <Location>
        {({ navigate, location: { pathname } }) => (
          <Fragment>
            <SidebarItem onClick={() => navigate(PATH.HOME)}>
              <Logo />
            </SidebarItem>
            <SidebarItemText
              icon={<IconHome />}
              text="Home"
              disableTranslation
              active={pathname === PATH.HOME}
              onClick={() => navigate(PATH.HOME)}
            />
            <SidebarItemText
              icon={<IconResearch />}
              text="methodology"
              active={pathname === PATH.RESEARCH}
              onClick={() => navigate(PATH.RESEARCH)}
            />
            <SidebarItemText
              icon={<IconResearch />}
              text="genres"
              active={pathname === [PATH.RESEARCH, PATH.GENRES].join('')}
              onClick={() => navigate([PATH.RESEARCH, PATH.GENRES].join(''))}
            />
            <SidebarItemText
              icon={<IconResearch />}
              text="popularity"
              active={pathname === [PATH.RESEARCH, PATH.POPULARITY].join('')}
              onClick={() => navigate([PATH.RESEARCH, PATH.POPULARITY].join(''))}
            />
            <SidebarItemText
              icon={<IconResearch />}
              text="interactivity"
              active={pathname === [PATH.RESEARCH, PATH.INTERACTIVITY].join('')}
              onClick={() => navigate([PATH.RESEARCH, PATH.INTERACTIVITY].join(''))}
            />
          </Fragment>
        )}
      </Location>
      <SidebarItemLink />
    </Box>
  </Fragment>
);

export default Sidebar;
