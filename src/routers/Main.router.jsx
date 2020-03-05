import React from 'react';
import { Router as ReachRouter } from '@reach/router';

// Pages
import { MainHomePage } from '../pages';

// Utils
import { PATH } from '../utils/const';

const MainRouter = () => (
  <ReachRouter>
    <MainHomePage path={PATH.HOME} />
  </ReachRouter>
);

export default MainRouter;
