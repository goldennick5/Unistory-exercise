import { FC } from 'react';

interface InputProps {
  label: string;
  placeholder: string;
  setValue: (val: string) => string;
  value: string;
}

const Input: FC<InputProps> = ({label, placeholder, setValue, value}) => {

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return (
    <div className='flex flex-col'>
      <label className='block text-2xl text-white'>{label}</label>
      <input type="text" value={value} onChange={changeHandler} placeholder={placeholder} required
        className='bg-transparent rounded-full border-solid border-2 border-white w-[26.2rem] h-11 px-3 font-sans text-sm text-white 
                   focus:border-[#E75626] focus:outline-none focus:placeholder-transparent
                   focus:transition focus:ease-in-out focus:duration-75'/>
    </div>
  );
}

export default Input;