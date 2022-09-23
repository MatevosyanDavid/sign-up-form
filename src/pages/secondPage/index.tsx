import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Form from 'components/form';
import Header from 'sections/header';
import FormRadio from 'components/radio';
import Button from 'components/button';
import DatePicker from 'components/datePicker';
import { getFromStorage, removeFromStorage, saveToStorage } from 'utils/persist';

import useStyles from './styles';

const SecondPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { parent, columns, row } = useStyles({});

  const { gender, date } = getFromStorage('firstPageData') || {};

  const { control, handleSubmit } = useForm({
    defaultValues: {
      gender: gender,
      date: date || new Date().toISOString().split('T')[0],
    },
  });

  const onSubmit = ({ gender = 'female', date }: any) => {
    removeFromStorage('secondPageData');
    saveToStorage('secondPageData', { gender: gender, date: date });
    navigate('/thirdPage');
  };

  return (
    <>
      <Header value={66} stepInfoText={'2/3'} prevNavigation={'/?currentPage=secondPage'} />
      <Form onSubmit={handleSubmit(onSubmit)} className={row}>
        <div className={parent}>
          <FormRadio name="gender" value={gender} control={control} className={columns} />
        </div>
        <DatePicker name="date" value={date} control={control} />
        <Button hasIcon>Next</Button>
      </Form>
    </>
  );
};

export default SecondPage;
