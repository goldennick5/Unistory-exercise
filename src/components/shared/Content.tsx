import { FC } from 'react';
import './styles/Content.css';

const Content: FC = () => {

  return (
    <div className='flex h-[700px] items-center'>
      <div className='flex relative'>
        <div className='flex flex-col relative'>
          <div className='mb-[30px]'>
            <h1 className='title text-9xl text-white truncate'>Explore Your own planet<br/>In <span className='stroke'>our New</span> metaverse</h1>
          </div>
          <div className='w-[26.2rem]'>
            <p className='font-sans font-normal text-base text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
          </div>
        </div>
      </div>
      <div className='absolute inset-y-0 right-[-190px] top-[60px] z-[-50]'>
        <div className='first__circle relative left-[-525px] rounded-full w-[526px] h-[526px]'>
          <div className='second__circle relative right-[-40px] bottom-[-40px] bg-[#1E1E20] rounded-full w-[446px] h-[446px]'>
            <div className='third__circle relative right-[-30px] bottom-[-30px] bg-[#1E1E20] border-2 border-[#323232] rounded-full w-[384px] h-[384px]'>
              <div className='fourth__circle relative right-[-14px] bottom-[-14px] bg-[#1E1E20] border-2 border-[#323232] rounded-full w-[354px] h-[354px]'>
                <div className='fifth__circle relative right-[-14px] bottom-[-14px] rounded-full w-[320px] h-[322px]'>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Content;