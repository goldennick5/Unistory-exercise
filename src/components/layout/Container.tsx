import {FC} from 'react'

interface ContainerProps {
  children: React.ReactNode | React.ReactChild,
}

const Container: FC<ContainerProps> = ({children}) => {

  return (
    <div className='px-16 flex w-[100%]'>
      {children}
    </div>
  );
}

export default Container;