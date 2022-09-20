import { memo } from 'react';
import MUIButton from '@material-ui/core/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface IButton {
  hasIcon?: boolean;
  children: JSX.Element | string;
}

const Button = ({ hasIcon = false, children }: IButton): JSX.Element => (
  <MUIButton
    fullWidth
    size="large"
    type="submit"
    color="primary"
    variant="contained"
    style={{ borderRadius: 27 }}
    {...(hasIcon && { endIcon: <ArrowForwardIcon /> })}
  >
    {children}
  </MUIButton>
);

export default memo(Button);
