import { getAllChampionsInfo } from '@/utils/serverApi';
import { ChampionData } from '@/types/Champion';
import Card from '@/components/Card';
import PageGuide from '@/components/PageGuide';
import { CHAMPION_IMAGE_BASE_URL } from '@/constants/api';

const Page = async () => {
  const data: ChampionData = await getAllChampionsInfo();
  const championsData = data.data;

  return (
    <div className='flex flex-col gap-3 m-5'>
      <PageGuide title='챔피언 목록' />
      <div className='grid grid-cols-fill-auto gap-3 w-full'>
        {Object.values(championsData).map((champion) => {
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
    </div>
  );
};

export default Page;
