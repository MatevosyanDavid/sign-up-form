import { Routes, useNavigate } from 'react-router-dom';

import { useMount } from 'utils/hooks';
import generateRoutes, { routes } from 'routes';

const Layout = (): JSX.Element => {
  const navigate = useNavigate();

  const str = window.location.search;
  const savedRoute = str.slice(str.indexOf('=') + 1);

  useMount(() => {
    savedRoute && navigate(savedRoute);
  });

  return <Routes>{generateRoutes(routes)}</Routes>;
};

export default Layout;
