// 서버 컴포넌트에서 사용할 데이터 페칭 함수들
'use server';
import { ItemData } from '@/types/item';
import { RIOT_DATA_BASE_URL, RIOT_VERSION_URL } from '@/constants/api';

export async function getLatestVersion() {
  const response = await fetch(`${RIOT_VERSION_URL}`);
  const versions = await response.json();
  return versions[0];
}

export async function getAllChampionsInfo() {
  const latestVersion = await getLatestVersion();

  const detailResponse = await fetch(`${RIOT_DATA_BASE_URL}/${latestVersion}/data/ko_KR/champion.json`, {
    next: { revalidate: 86400 },
  });

  return await detailResponse.json();
}

export async function getChampionDetails(name: string) {
  const response = await fetch(`${RIOT_DATA_BASE_URL}/14.19.1/data/ko_KR/champion/${name}.json`);

  if (!response.ok) {
    const errorText = await response.text(); // 에러 내용을 텍스트로 가져와서 확인
    console.error(`Error fetching champion details: ${response.status}, ${errorText}`);
    throw new Error(`Failed to fetch champion details: ${response.status}`);
  }

  return await response.json();
}

export async function getAllItemsInfo() {
  const latestVersion = await getLatestVersion();

  const response = await fetch(`${RIOT_DATA_BASE_URL}/${latestVersion}/data/ko_KR/item.json`, {
    cache: 'force-cache',
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Error fetching items details: ${response.status}, ${errorText}`);
    throw new Error(`Failed to fetch items details: ${response.status}`);
  }

  const data: ItemData = await response.json();
  return data;
}
