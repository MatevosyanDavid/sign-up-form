import { FormHTMLAttributes } from 'react';

const Form = (props: FormHTMLAttributes<HTMLFormElement>): JSX.Element => (
  <form noValidate autoComplete="off" {...props} />
);

export default Form;
