import { Routes, useNavigate } from 'react-router-dom';

import { useMount, useQuery } from 'utils/hooks';
import generateRoutes, { routes } from 'routes';

const Layout = (): JSX.Element => {
  const query = useQuery();
  const navigate = useNavigate();

  useMount(() => {
    const currentPage = query.get('currentPage');

    currentPage && navigate(currentPage);
  });

  return <Routes>{generateRoutes(routes)}</Routes>;
};

export default Layout;
