import { memo } from 'react';
import { Controller } from 'react-hook-form';

import StyledInput from 'components/styledInput';

interface IInput {
  type: string;
  name: string;
  control: any;
  error?: boolean;
  helperText?: any;
  fullWidth: boolean;
  placeholder: string;
  size?: 'small' | 'medium';
  variant: 'standard' | 'outlined';
}

const Input = ({
  type,
  error,
  placeholder,
  helperText,
  size = 'small',
  fullWidth = true,
  variant = 'standard',
  ...props
}: IInput) => (
  <Controller
    {...props}
    render={({ field }) => (
      <StyledInput
        {...field}
        size={size}
        type={type}
        error={error}
        variant={variant}
        fullWidth={fullWidth}
        helperText={helperText}
        value={field.value ?? ''}
        placeholder={placeholder}
      />
    )}
  />
);

export default memo(Input);
