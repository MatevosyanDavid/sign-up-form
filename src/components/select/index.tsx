import { memo } from 'react';
import { styled } from '@mui/material/styles';
import { Controller } from 'react-hook-form';
import MUISelect from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const StyledMenuItem = styled(MenuItem)({
  '&': {
    width: '100%',
    justifyContent: 'flex-start',
    paddingTop: '6px',
    paddingBottom: '6px',
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
    paddingLeft: '16px',
    paddingRight: '16px',
  },
});

interface ISelect {
  label: string;
  error: any;
  placeholder: string;
  options: any[];
  fullWidth?: boolean;
  variant: 'standard' | 'outlined';
  name: string;
  control?: any;
  sx?: any;
  helperText?: any;
}

const Select = ({
  label,
  error,
  placeholder,
  options = [],
  fullWidth = true,
  variant = 'standard',
  ...props
}: ISelect) => (
  <FormControl variant={variant} fullWidth>
    <Controller
      {...props}
      render={({ field }) => (
        <>
          <InputLabel id={props.name}>{label}</InputLabel>
          <MUISelect
            {...field}
            label={label}
            error={error}
            value={field.value ?? ''}
            placeholder={placeholder}
            sx={{ borderRadius: 27 }}
          >
            {options.map(({ value, label }: any) => (
              <StyledMenuItem key={value} value={value}>
                {label}
              </StyledMenuItem>
            ))}
          </MUISelect>
        </>
      )}
    />
  </FormControl>
);

export default memo(Select);
