import { FC } from 'react';
import { useGetUsersQuery } from '../../../services/UserService';
import { useAppSelector } from '../../../hooks/redux';
import UserItem from './UserItem';

interface UsersTableProps {

}

const UsersTable: FC<UsersTableProps> = () => {
  const { data } = useGetUsersQuery(0);
  const username = useAppSelector((state) => state.user.username);
  const email = useAppSelector((state) => state.user.email);
  const address = useAppSelector((state) => state.user.address);

  return (
    <div>
      <div className='mb-5'>
        <h1 className='text-3xl text-white'>Participation listing (enable only for participants)</h1>
      </div>
      <div className='overflow-y-auto h-[590px]'>
        <table className="w-[34rem] font-normal text-sm text-white text-left">
          <thead className='border-b-2 border-white'>
            <tr>
              <th className='text-lg'>Name</th>
              <th className='text-lg'>Email</th>
              <th className='text-lg'>Wallet</th>
            </tr>
          </thead>
          <tbody className='overscroll-contain'>
            <tr className='border-b-[1px] border-white'>
              <td className='font-mono font-extralight text-[12px] py-3 text-[#E75626]'>{username}</td>
              <td className='font-mono font-extralight text-[12px] py-3 text-[#E75626]'>{email}</td>
              <td className='font-mono font-extralight text-[12px] py-3 text-[#E75626]'>{address}</td>
            </tr>
            {data?.items.map((user) => <UserItem key={user.id} user={user} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersTable;