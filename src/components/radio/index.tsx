import { memo } from 'react';
import { Controller } from 'react-hook-form';
import MUIRadio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const StyledRadioGroup = styled(RadioGroup)({
  '& .MuiFormControlLabel-root': {
    border: '1px solid #1e85fe',
    borderRadius: '27px',
    margin: 0,
    '& .MuiRadio-root': {
      padding: '8px',
    },
  },
});

interface IRadio {
  error?: any;
  name: string;
  value: string;
  control: any;
  className: string;
  fullWidth?: boolean;
}

const Radio = ({ error, fullWidth = true, ...props }: IRadio) => (
  <Controller
    {...props}
    render={({ field }) => (
      <StyledRadioGroup
        {...field}
        // @ts-ignore
        error={error}
        aria-label="gender"
        value={field.value ?? 'female'}
      >
        <FormControlLabel value="female" label="Female" control={<MUIRadio />} />
        <FormControlLabel value="male" label="Male" control={<MUIRadio />} />
      </StyledRadioGroup>
    )}
  />
);

export default memo(Radio);
