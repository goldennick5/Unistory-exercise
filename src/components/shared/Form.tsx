import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getUsername, getEmail, disableButton } from '../../store/reducers/UserSlice';
import Input from '../ui/button/Input';

interface FormProps {
  showForm: boolean;
}

const Form: FC<FormProps> = ({ showForm }) => {
  const username = useAppSelector((state) => state.user.username);
  const email = useAppSelector((state) => state.user.email);
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');

  const handleName = (nameValue: string): any => {
    dispatch(getUsername(nameValue));
    setName(nameValue);
  }

  const handleEmail = (emailValue: string): any => {
    dispatch(getEmail(emailValue));
    setMail(emailValue);
  }

  (name != '' && mail != '') ? dispatch(disableButton(false)) : dispatch(disableButton(true));

  return (
    <div className='flex flex-col mt-9'>
      <div>
        {showForm ? 
          <div>
            <label className='block text-2xl text-white'>Name</label>
            <input className='text-3xl text-[#E75626] bg-transparent' type="text" value={username}/>
          </div>
          : 
          <Input label='name' setValue={handleName} value={username} placeholder='We will display your name in participation list'/>}
      </div>
      <div className='mt-5 mb-6'>
        {showForm ?
          <div>
            <label className='block text-2xl text-white'>Name</label>
            <input className='text-3xl text-[#E75626] bg-transparent' type="text" value={email} />
          </div>
          :
          <Input label='email' setValue={handleEmail} value={email} placeholder='We will display your email in participation list' />}
      </div>
    </div>
  );
}

export default Form;