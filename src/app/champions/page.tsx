import { getAllChampionsInfo } from '@/utils/serverApi';
import { ChampionData } from '@/types/Champion';
import Card from '@/components/Card';

const Page = async () => {
  const data: ChampionData = await getAllChampionsInfo();
  const championsData = data.data;

  return (
    <div>
      {Object.values(championsData).map((champion) => {
        return (
          <Card
            key={champion.id}
            id={champion.id}
            img={`http://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
            name={champion.name}
            title={champion.title}
          />
        );
      })}
    </div>
  );
};

export default Page;
