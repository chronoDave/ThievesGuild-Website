import React from 'react';
import { Router as ReachRouter } from '@reach/router';

// Pages
import {
  ResearchHomePage,
  ResearchGenresPage
} from '../pages';

// Utils
import { PATH } from '../utils/const';

const ResearchRouter = () => (
  <ReachRouter>
    <ResearchHomePage path={PATH.HOME} />
    <ResearchGenresPage path={PATH.GENRES} />
  </ReachRouter>
);

export default ResearchRouter;
