import { getChampionDetails } from '@/utils/serverApi';
import { ChampionData } from '@/types/Champion';
import Image from 'next/image';
import { CHAMPION_IMAGE_BASE_URL } from '@/constants/api';

type ParamsType = {
  params: { id: string };
};

const Page = async ({ params: { id } }: ParamsType) => {
  const championDetail: ChampionData = await getChampionDetails(id);
  const { data } = championDetail;
  const { name, title, image, lore, info } = data[id];

  return (
    <div className='flex flex-col gap-5 text-white mx-5 mt-10'>
      <div>
        <h2 className='font-extrabold text-[30px] text-light-skyblue'>{name}</h2>
        <p className='text-[20px]'>{title}</p>
      </div>
      <div className='flex justify-center items-center w-full'>
        <Image
          src={`${CHAMPION_IMAGE_BASE_URL}/${image.full}`}
          alt={name}
          width={200}
          height={200}
        />
      </div>
      <p>{lore}</p>
      <div>
        <ul className='font-bold text-[20px] text-light-skyblue'>스탯</ul>
        <li>공격력: {info.attack}</li>
        <li>방어력: {info.defense}</li>
        <li>마법력: {info.magic}</li>
        <li>난이도: {info.difficulty}</li>
      </div>
    </div>
  );
};

export default Page;
