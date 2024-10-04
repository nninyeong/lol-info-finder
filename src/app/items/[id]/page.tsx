import React from 'react';
import { getAllItemsInfo } from '@/utils/serverApi';
import Image from 'next/image';
import { ITEM_IMAGE_BASE_URL } from '@/constants/api';
import { Metadata } from 'next';
import { Stats } from 'node:fs';

type ParamsType = {
  params: { id: string };
};

export const generateMetadata = async ({ params: { id } }: ParamsType): Promise<Metadata> => {
  const itemsInfoResponse = await getAllItemsInfo();
  const { name, plaintext } = itemsInfoResponse.data[id];

  return {
    title: `${name} | 리그오브레전드 아이템 정보`,
    description: `리그오브레전드 아이템 ${name}: (${plaintext})`,
  };
};

export const generateStaticParams = async () => {
  const itemsInfoResponse = await getAllItemsInfo();
  const allItemKeys = Object.keys(itemsInfoResponse.data);

  return allItemKeys.map((id: string) => {
    return { id: id };
  });
};

const Page = async ({ params: { id } }: ParamsType) => {
  const itemsInfoResponse = await getAllItemsInfo();
  const itemData = itemsInfoResponse.data[id];

  return (
    <div className='flex flex-col gap-3 m-5 text-white w-[500px] mr-auto ml-auto'>
      <div>
        <h3 className='font-extrabold text-[30px] text-white'>{itemData.name}</h3>
        <div className='flex flex-wrap'>
          {itemData.tags.map((tag) => {
            return (
              <div
                key={tag}
                className='w-max text-light-skyblue font-semibold bg-dark-skyblue px-2 rounded m-1'
              >
                <p>{tag}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex flex-col gap-3 justify-center items-center w-full'>
        <Image
          src={`${ITEM_IMAGE_BASE_URL}/${itemData.image.full}`}
          alt={itemData.name}
          width={200}
          height={200}
        />
        <p>{itemData.plaintext}</p>
      </div>
      <div className='flex flex-col items-center w-full'>
        <ul className='font-bold text-[20px]'>아이템 정보</ul>
        {itemData.stats
          ? Object.entries(itemData.stats).map(([key, value]) => {
              return (
                <li key={key}>
                  {key}: {value}
                </li>
              );
            })
          : null}
        <li>구매 가격: {itemData.gold.total}</li>
        <li>판매 가격: {itemData.gold.sell}</li>
      </div>
    </div>
  );
};

export default Page;
