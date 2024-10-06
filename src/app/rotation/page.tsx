'use client';
import { CHAMPION_IMAGE_BASE_URL } from '@/constants/api';
import { useEffect, useState } from 'react';
import { Champion } from '@/types/Champion';
import Card from '@/components/Card';
import PageGuide from '@/components/PageGuide';

const Page = () => {
  const [freeChampions, setFreeChampions] = useState<Champion[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRotationData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/rotation`, { method: 'GET' });
        const rotations = await response.json();
        const freeChampions = rotations;

        setFreeChampions([...freeChampions]);
      } catch (error) {
        console.error('Fetching Rotations Error: ', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRotationData();
  }, []);

  return (
    <div className='flex flex-col gap-3 m-5'>
      <PageGuide title='챔피언 로테이션' />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='grid grid-cols-fill-auto gap-3 w-full'>
          {freeChampions!.map((champion) => {
            return (
              <Card
                key={champion.id}
                id={champion.id}
                img={`${CHAMPION_IMAGE_BASE_URL}/${champion.image.full}`}
                name={champion.name}
                title={champion.title}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Page;
