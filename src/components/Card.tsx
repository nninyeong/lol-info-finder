'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type CardProps = {
  id: string;
  img: any;
  name: string;
  title: string;
};

const Card = ({ img, name, title, id }: CardProps) => {
  const pathname = usePathname();
  const detailRoute = pathname.includes('/champions') ? `/champions/${id}` : `/items/${id}}`;
  console.log(detailRoute);

  return (
    <Link href={detailRoute}>
      <div className='flex flex-col gap-1 justify-center items-center border border-amber-50 w-[400px] p-[20px]'>
        <Image
          src={img}
          alt={name}
          width={150}
          height={150}
        />
        <p className='text-white font-semibold text-[26px]'>{name}</p>
        <p className='text-light-gray text-[22px]'>{title}</p>
      </div>
    </Link>
  );
};

export default Card;
