import { memo } from 'react';
import { Controller } from 'react-hook-form';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import StyledInput from 'components/styledInput';

interface IDatePicker {
  value: string;
  control: any;
  name: string;
}

const DatePicker = (props: IDatePicker): JSX.Element => (
  <Controller
    {...props}
    name="date"
    render={({ field }) => (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MUIDatePicker
          {...field}
          value={field.value}
          renderInput={params => <StyledInput {...params} />}
        />
      </LocalizationProvider>
    )}
  />
);

export default memo(DatePicker);
