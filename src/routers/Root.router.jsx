import React from 'react';
import { Router as ReachRouter } from '@reach/router';

// Core
import { App } from '../components';

import { Sidebar } from '../modules';

// Routers
import MainRouter from './Main.router';
import ResearchRouter from './Research.router';

// Utils
import { PATH } from '../utils/const';

const RootRouter = () => (
  <App
    sidebar={<Sidebar />}
  >
    <ReachRouter>
      <MainRouter path={`${PATH.HOME}*`} />
      <ResearchRouter path={`${PATH.RESEARCH}/*`} />
    </ReachRouter>
  </App>
);

export default RootRouter;
