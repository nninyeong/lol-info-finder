import React from 'react';
import Image from 'next/image';
import rabbit from '@/public/rabbit.gif';

const Loading = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center w-full min-h-screen'>
      <p className='text-white text-3xl'>잠시만 기다려주세요!</p>
      <Image
        src={rabbit}
        alt='Loading'
        width={400}
        height={400}
      />
    </div>
  );
};

export default Loading;
