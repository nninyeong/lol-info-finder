// 서버 컴포넌트에서 사용할 데이터 페칭 함수들
'use server';
export async function getLatestVersion() {
  const response = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
  const versions = await response.json();
  return versions[0];
}

export async function getAllChampionsInfo() {
  const latestVersion = await getLatestVersion();

  const detailResponse = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion.json`,
    {
      next: { revalidate: 86400 },
    },
  );

  return await detailResponse.json();
}

export async function getChampionDetails(name: string) {
  const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion/${name}.json`);

  if (!response.ok) {
    const errorText = await response.text(); // 에러 내용을 텍스트로 가져와서 확인
    console.error(`Error fetching champion details: ${response.status}, ${errorText}`);
    throw new Error(`Failed to fetch champion details: ${response.status}`);
  }

  return await response.json();
}
