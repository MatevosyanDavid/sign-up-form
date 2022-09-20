import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const StyledInput = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: 27,
  },
});

export default StyledInput;
