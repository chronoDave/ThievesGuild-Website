// Core
import { Typography } from '@material-ui/core';

import MarkdownCode from './MarkdownCode';

export const options = {
  overrides: {
    h1: {
      component: Typography,
      props: { variant: 'h1', paragraph: true }
    },
    h2: {
      component: Typography,
      props: { variant: 'h2', paragraph: true }
    },
    h3: {
      component: Typography,
      props: { variant: 'h3', paragraph: true }
    },
    h4: {
      component: Typography,
      props: { variant: 'h4', paragraph: true }
    },
    h5: {
      component: Typography,
      props: { variant: 'h5', paragraph: true }
    },
    h6: {
      component: Typography,
      props: { variant: 'h6', paragraph: true }
    },
    p: {
      component: Typography,
      props: { variant: 'body1', paragraph: true }
    },
    code: MarkdownCode
  }
};
