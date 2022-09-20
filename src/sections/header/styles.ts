import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: '1fr auto 1fr',
  },
  progress: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '64px',
    height: '64px',
    '& span': {
      position: 'absolute',
      fontWeight: '700',
      fontSize: '22px',
    },
  },
  back: {
    color: '#b2becc',
    fontWeight: 700,
    fontSize: '14px',
    display: 'flex',
    gap: '5px',
    alignItems: 'center',
    cursor: 'pointer',
  },
  reset: {
    color: 'var(--primary)',
    fontWeight: 600,
    fontSize: '16px',
    textAlign: 'right',
    cursor: 'pointer',
  },
  hint: {
    margin: '52px auto',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '35px',
    textAlign: 'center',
    maxWidth: '250px',
    color: '#555a69',
  },
});

export default useStyles;
