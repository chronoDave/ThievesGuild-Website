import React from 'react';
import { Router as ReachRouter } from '@reach/router';

// Pages
import { ResearchHomePage } from '../pages';

// Utils
import { PATH } from '../utils/const';

const ResearchRouter = () => (
  <ReachRouter>
    <ResearchHomePage path={PATH.HOME} />
  </ReachRouter>
);

export default ResearchRouter;
