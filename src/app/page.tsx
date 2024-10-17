import PageGuide from '@/components/PageGuide';
import ImageLink from '@/components/ImageLink';
import championImg from '@/public/championImg.webp';
import itemImg from '@/public/itemLinkImg.webp';
import rotationImg from '@/public/rotationLinkImg.webp';

export default function Home() {
  return (
    <div className='flex flex-col items-center gap-10 w-full pt-20'>
      <PageGuide
        title='리그오브레전드 정보 앱'
        description='챔피언과 아이템 정보, 금주의 로테이션까지 궁금한 정보를 찾아보세요!'
      />
      <ImageLink
        path='/champions'
        img={championImg}
        label='챔피언 목록 보기'
      />
      <ImageLink
        path='/rotation'
        img={rotationImg}
        label='금주 로테이션 확인'
      />
      <ImageLink
        path='/items'
        img={itemImg}
        label='아이템 목록 보기'
      />
    </div>
  );
}
