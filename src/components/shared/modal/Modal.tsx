import { FC } from 'react';
import Button from '../../ui/button/Button';

interface ModalProps {
  handleModal?: (value: boolean) => void;
}

const Modal: FC<ModalProps> = ({handleModal}) => {
  return ( 
    <div className='absolute w-[100%] h-[1400px] bg-zinc-900 bg-opacity-90 z-50'>
      <div className='fixed z-50 inset-0 top-[30%] left-[35%] w-[422px] h-[295px] bg-[#262628] text-center'>
        <div>
          <h1 className='text-[27px] text-[#E75626] my-[30px]'>Metamask extension</h1>
        </div>
        <div className='mb-[40px]'>
          <p className='text-white font-sans'>
            To work with out application, you have to <br/> install the <span className='text-[#E75626]'><a className='font-sans' href="https://metamask.io/download/">Metamask browser extension</a></span>
          </p>
        </div>
        <div>
          <Button name='Skip this step' handleModal={handleModal} />
        </div>
      </div>
    </div>
  );
}

export default Modal;