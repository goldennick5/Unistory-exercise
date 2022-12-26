import { FC } from 'react';

interface UserItemProps {
  user: any;
}

const shortenAddress = (address: string) => `${address.slice(0, 19)}...`;

const UserItem: FC<UserItemProps> = ({user}) => {

  return (
    <>
      <tr className='border-b-[1px] border-white'>
        <td className='font-mono font-extralight text-[12px] py-3'>{user.username}</td>
        <td className='font-mono font-extralight text-[12px] py-3'>{user.email}</td>
        <td className='font-mono font-extralight text-[12px] py-3'>{shortenAddress(user.address)}</td>
      </tr>
    </>
  );
}

export default UserItem;