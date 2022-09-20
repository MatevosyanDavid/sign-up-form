import { lazy } from 'react';
import { Route } from 'react-router-dom';

import { IRoutesItem } from 'types';
import asyncComponent from 'utils/hooks/asyncComponent';

export const routes: IRoutesItem[] = [
  // {
  //   path: '/',
  //   component: AsyncComponent(lazy(() => import('pages/home'))),
  // },
  // {
  //   path: '/secondPage',
  //   component: AsyncComponent(lazy(() => import('pages/secondPage'))),
  // },
  // {
  //   path: '/thirdPage',
  //   component: AsyncComponent(lazy(() => import('pages/thirdPage'))),
  // },
  {
    path: '*',
    component: asyncComponent(lazy(() => import('pages/notFound'))),
  },
];

const generateRoutes = (routes: IRoutesItem[]): JSX.Element[] =>
  routes.map(({ component: Component, path }: IRoutesItem) => (
    <Route key={path} path={path} element={<Component />} />
  ));

export default generateRoutes;
