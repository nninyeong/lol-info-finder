'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type CardProps = {
  id: string;
  img: string;
  name: string;
  title: string;
};

const Card = ({ id, img, name, title }: CardProps) => {
  const pathname = usePathname();
  const detailRoute =
    pathname.includes('/champions') || pathname.includes('/rotation') ? `/champions/${id}` : `/items/${id}`;

  return (
    <Link href={detailRoute}>
      <div className='flex flex-col gap-1 justify-center items-center border border-amber-50 h-[250px] py-[20px] group hover:bg-white'>
        <Image
          src={img}
          alt={name}
          width={100}
          height={100}
        />
        <p className='text-white font-semibold text-[26px] group-hover:text-primary-dark-navy'>{name}</p>
        <p className='text-light-gray text-[22px] group-hover:text-secondary-dark-navy'>{title}</p>
      </div>
    </Link>
  );
};

export default Card;
