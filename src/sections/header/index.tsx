import { memo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { removeFromStorage } from 'utils/persist';

import useStyles from './styles';

interface IHeader {
  value: number;
  stepInfoText: string;
  prevNavigation: string;
}

const Header = ({ value, stepInfoText, prevNavigation }: IHeader) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { root, back, reset, progress, hint } = useStyles({});

  const inLastPage = pathname.includes('thirdPage');

  const handleBackClick = () => navigate(prevNavigation);

  const handleResetClick = () => {
    navigate('/');

    removeFromStorage('firstPageData');
    removeFromStorage('thirdPageData');
    removeFromStorage('secondPageData');
  };

  return (
    <>
      <div className={root}>
        <div className={back} onClick={handleBackClick}>
          <ArrowBackIcon />
          Previous
        </div>
        <div className={progress}>
          <CircularProgress size={64} value={value} thickness={4} variant="determinate" />
          <span>{stepInfoText}</span>
        </div>
        {inLastPage && (
          <div className={reset} onClick={handleResetClick}>
            Reset
          </div>
        )}
      </div>
      <p className={hint}>Submit your personal Information</p>
    </>
  );
};

export default memo(Header);
