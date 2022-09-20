import { lazy } from 'react';
import { Route } from 'react-router-dom';

import { IRoutesItem } from 'types';
import AsyncComponent from 'components/asyncComponent';

export const routes: IRoutesItem[] = [
  {
    path: '*',
    component: AsyncComponent(lazy(() => import('pages/notFound'))),
  },
];

const generateRoutes = (routes: IRoutesItem[]): JSX.Element[] =>
  routes.map(({ component: Component, path }: IRoutesItem) => (
    <Route key={path} path={path} element={<Component />} />
  ));

export default generateRoutes;
