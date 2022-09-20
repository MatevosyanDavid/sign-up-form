import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  columns: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  row: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
});

export default useStyles;
