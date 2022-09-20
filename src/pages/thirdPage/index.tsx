import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from 'components/button';
import resolvers from 'configs/resolvers';
import { getFromStorage } from 'utils/persist';
import Form from 'components/form';
import Header from 'sections/header';
import Input from 'components/input';
import Select from 'components/select';

import useStyles from './styles';

const positions = [
  { label: 'Junior', value: 'Junior' },
  { label: 'Middle', value: 'Middle' },
  { label: 'Senior', value: 'Senior' },
];

const ThirdPage = () => {
  const navigate = useNavigate();
  const { row } = useStyles({});

  const thirdPageData = getFromStorage('thirdPageData');
  const firstPageData = getFromStorage('firstPageData');
  const secondPageData = getFromStorage('secondPageData');

  const { company, position } = thirdPageData || {};

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      company,
      position,
    },
    resolver: resolvers.thirdStep,
  });

  const onSubmit = (data: any) => {
    localStorage.removeItem('thirdPageData');
    localStorage.setItem('thirdPageData', JSON.stringify(data));
    navigate('/thirdPage');

    console.log(
      {
        ...firstPageData,
        ...secondPageData,
        ...data,
      },
      'User Created !!',
    );
  };

  return (
    <>
      <Header
        value={100}
        stepInfoText={'3/3'}
        prevNavigation={'/secondPage?currentPage=thirdPage'}
      />
      <Form onSubmit={handleSubmit(onSubmit)} className={row}>
        <Input
          fullWidth
          type="text"
          name="company"
          control={control}
          variant="outlined"
          error={!!errors?.company}
          placeholder={'Company name'}
          helperText={errors?.company?.message}
        />
        <Select
          fullWidth
          name="position"
          label="Position"
          control={control}
          variant="outlined"
          options={positions}
          error={errors?.position}
          sx={{ m: 0, minWidth: 300 }}
          placeholder="-- Select one --"
          helperText={errors?.position?.message}
        />
        <Button>Submit</Button>
      </Form>
    </>
  );
};

export default ThirdPage;
