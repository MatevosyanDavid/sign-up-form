import { useLocation, Location } from 'react-router-dom';

const useQuery = (): URLSearchParams => {
  const location: Location = useLocation();

  return new URLSearchParams(location.search);
};

export default useQuery;
