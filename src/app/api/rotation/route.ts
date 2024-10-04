import { ChampionRotation } from '@/types/ChampionRotation';
import { NextResponse } from 'next/server';
import { getAllChampionsInfo } from '@/utils/serverApi';
import { ChampionData } from '@/types/Champion';

export async function GET() {
  const apiKey = process.env.RIOT_API_KEY;

  if (!apiKey) throw new Error('Riot API key is required');
  const response = await fetch('https://kr.api.riotgames.com/lol/platform/v3/champion-rotations', {
    headers: {
      'X-Riot-Token': apiKey,
    },
  });

  if (!response.ok) {
    const errorText = await response.text(); // 에러 내용을 텍스트로 가져와서 확인
    console.error(`Error fetching champion details: ${response.status}, ${errorText}`);
    throw new Error(`Failed to fetch champion details: ${response.status}`);
  }

  const championRotation: ChampionRotation = await response.json();
  const { freeChampionIds } = championRotation;

  const allChampions: ChampionData = await getAllChampionsInfo();

  const freeChampions = Object.values(allChampions.data).filter((champion) => {
    return freeChampionIds.includes(+champion.key);
  });

  return NextResponse.json(freeChampions);
}
