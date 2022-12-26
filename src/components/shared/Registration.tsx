import { FC } from 'react';
import { useAppSelector } from '../../hooks/redux';
import Form from './Form';
import Button from '../ui/button/Button';

interface RegistrationProps {
  handleForm?: (value: boolean) => void;
  showForm: boolean;
}

const Registration: FC<RegistrationProps> = ({ handleForm, showForm }) => {
  const disable = useAppSelector((state) => state.user.disable);

  return (
    <div className='mr-[23%] h-[690px]'>
      <div className='mb-5'>
        <h1 className='text-3xl text-[#E75626]'>Beta test registration</h1>
      </div>
      <div className='w-[26.2rem]'>
        <p className='font-sans font-normal text-base text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
      </div>
      <Form showForm={showForm} />
      {showForm ? <button className='bg-[#E75626] opacity-50 text-white py-2 px-5 rounded-full uppercase text-base' disabled>List me to the table</button> : <Button name='Get early access' disable={disable} handleForm={handleForm} />}
    </div>
  );
}

export default Registration;