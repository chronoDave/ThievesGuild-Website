import React from 'react';
import { render } from 'react-dom';

// Core
import {
  ThemeProvider,
  CssBaseline
} from '@material-ui/core';

// Router
import { RootRouter } from './routers';

// Theme
import { theme } from './theme';

// Locale
import './utils/locale';

render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <RootRouter />
    </CssBaseline>
  </ThemeProvider>,
  document.getElementById('root')
);
