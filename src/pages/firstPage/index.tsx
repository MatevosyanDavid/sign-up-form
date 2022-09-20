import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from 'components/button';

import resolvers from 'configs/resolvers';

import Form from 'components/form';
import Header from 'sections/header';
import Input from 'components/input';
import { getFromStorage, removeFromStorage, saveToStorage } from 'utils/persist';

import useStyles from './styles';

const FirstPage = () => {
  const navigate = useNavigate();
  const { row, columns } = useStyles({});

  const { firstName, lastName, email } = getFromStorage('firstPageData') || {};

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName,
      lastName,
      email,
    },
    resolver: resolvers.firstStep,
  });

  const onSubmit = (data: any) => {
    removeFromStorage('firstPageData');
    saveToStorage('firstPageData', data);

    navigate('/secondPage');
  };

  return (
    <>
      <Header value={33} stepInfoText={'1/3'} prevNavigation={'/?currentPage=/'} />
      <Form onSubmit={handleSubmit(onSubmit)} className={row}>
        <div className={columns}>
          <Input
            fullWidth
            type="text"
            name="firstName"
            variant="outlined"
            control={control}
            placeholder={'First name'}
            error={!!errors?.firstName}
            helperText={errors?.firstName?.message}
          />
          <Input
            fullWidth
            type="text"
            name="lastName"
            variant="outlined"
            control={control}
            placeholder={'Last name'}
            error={!!errors?.lastName}
            helperText={errors?.lastName?.message}
          />
        </div>
        <Input
          fullWidth
          type="text"
          name="email"
          variant="outlined"
          control={control}
          placeholder={'Email'}
          error={!!errors?.email}
          helperText={errors?.email?.message}
        />
        <Button>Next</Button>
      </Form>
    </>
  );
};

export default FirstPage;
