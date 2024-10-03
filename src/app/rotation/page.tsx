const DOMAIN_URL = "http://localhost:3000";

const Page = async () => {
  const response = await fetch(`${DOMAIN_URL}/api/rotation`, { method: "GET" });
  const rotations = await response.json();
  const { freeChampionIds, freeChampionIdsForNewPlayers, maxNewPlayerLevel } =
    rotations;

  return <div>rotation 페이지입니다</div>;
};

export default Page;
