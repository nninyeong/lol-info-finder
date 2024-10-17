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

// fetch : next.js에서 데이터를 가져오는데에 사용할 수 있음
// 클라이언트, 서버 양쪽에서 다 사용할 수 있음
// 클라이언트에서 fetch 요청 -> 요청이 브라우저에서 일어남
// 서버에서 요청 -> 서버에서 요청 발생, 클라이언트 측에서 노출이 줄어든다
// 라우트핸들러
// 요청을 처리하고 json을 반환함
// 관련해서 데이터를 처리하거나 서버 전용 경로를 만들어준다
// 서버 쪽에만 있으니 클라이언트에서 요청하는 것보다 보안적으로 유리할 수 있음
// 서버 액션: 넥스트에서 서버에서 직접 실행되는 함수를 정의해 클라이언트에서 서버로 데이터를 전송한다던지,
// fetch, route handler랑은 성질이 다름
// fetch: 노드에는 없는데 넥스트에서 만들어둔 폴리필??
// fetch는 서버 액션으로 만들어주지 않는다면 양쪽 환경에 모두 존재할 수 있음 -> 각자의 fetch로 동작
// 브라우저에서 하면 진짜 리액트에서의 브라우저 api
// 서버액션은 환경을 서버로 고정
// 클라이언트에서 서버의 동작을 만들어내야할 때 쓰는 것
// route handler : 둘과 성격이 좀 다름 route가 생김
// 어플리케이션이 유효한 실행 상태일 때만 접근 가능 (빌드타임에 접근 불가(
// 주소가 우리 말고 우리의 도메인을 알고있는 대상에게도 public 하게 열림
// 서버액션과 페치는 리액트 컴포넌트 내부에서 동작 (클라이언트, 서버 상관없이)
// 라우트 핸들러는 컴포넌트 외부에서 동작 -> 컴포넌트 컨텍스트에 접근이 불가
// 라우트가 생긴다는 건 미들웨어를 통해 라우트에 접근하는 요청을 제어할 수 있는 범위가 넓어진다
//

// ZOD에 타입검사 뭔지 한번 다시 확인
