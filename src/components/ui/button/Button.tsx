import { FC } from 'react';

interface ButtonProps {
  name: string;
  clickHandler?: () => void;
  handleForm?: (value: boolean) => void;
  handleModal?: (value: boolean) => void;
  showModal?: boolean;
  disable?: boolean;
}

const Button: FC<ButtonProps> = ({ name, clickHandler, handleForm, disable, handleModal }) => {
  const handleFormButton = (val: boolean) => {
    handleForm?.(val);
  }

  const handleModalClose= (val: boolean) => {
    handleModal?.(val);
  }

  return (
    <button onClick={() => clickHandler || handleFormButton(true) || handleModalClose(false)} className='bg-[#E75626] text-white py-2 px-5 rounded-full uppercase text-base hover:opacity-75 transition duration-150' disabled={disable}>{name}</button>
  );
}

export default Button;