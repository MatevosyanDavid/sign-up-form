import { makeStyles } from '@mui/styles';

const styles = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '16px',
};

const useStyles = makeStyles({
  columns: styles,
  parent: {
    '& div': styles,
  },
  row: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
});

export default useStyles;
