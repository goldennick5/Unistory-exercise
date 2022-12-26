import { FC } from 'react';
import Button from '../ui/button/Button';
import { useEthers } from '@usedapp/core/dist/esm/src/hooks';
import { useAppDispatch } from '../../hooks/redux';
import { getAddress } from '../../store/reducers/UserSlice';

const shortenAddress = (address: string) => `${address.slice(0, 19)}...`;

const Header: FC = () => {
  const { activateBrowserWallet, account } = useEthers();
  
  const dispatch = useAppDispatch();
  dispatch(getAddress(`${account?.slice(0, 19)}...`));

  return (
    <div className='px-16 py-3 flex justify-between items-center'>
      <div className='bg-[#5A5A5A] text-white px-16 py-2 border-dashed border-2 border-[#C7C7C7]'>
        <h2 className='font-normal text-base'>LOGO</h2>
      </div>
      <div>
        <h2>
          {!account ? <Button clickHandler={() => activateBrowserWallet()} name='Connect metamask' />
          : <h3 className='text-[#E75626]'>{shortenAddress(account)}</h3>}
        </h2>
      </div>
    </div>
  );
}

export default Header;