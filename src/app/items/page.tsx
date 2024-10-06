import { getAllItemsInfo } from '@/utils/serverApi';
import { ItemData } from '@/types/item';
import Card from '@/components/Card';
import { ITEM_IMAGE_BASE_URL } from '@/constants/api';
import PageGuide from '@/components/PageGuide';

const Page = async () => {
  const itemsInfo: ItemData = await getAllItemsInfo();
  const itemData = itemsInfo.data;

  return (
    <div className='flex flex-col gap-3 m-5'>
      <PageGuide title='아이템 목록' />
      <div className='grid grid-cols-fill-auto gap-3 w-full'>
        {Object.entries(itemData).map(([id, data]) => {
          return (
            <Card
              key={id}
              id={id}
              img={`${ITEM_IMAGE_BASE_URL}/${data.image.full}`}
              name={data.name}
              title={data.plaintext}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page;
