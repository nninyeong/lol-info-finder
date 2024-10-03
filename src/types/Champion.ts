import { StaticImageData } from 'next/image';

type DataImage = {
  full: string | StaticImageData;
  sprite: string | StaticImageData;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

type DataStats = {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  apellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
};

type DataInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

export type Champion = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  lore: string;
  blurb: string;
  info: DataInfo;
  image: DataImage;
  tags: string[];
  partype: string;
  stats: DataStats;
};

export type ChampionData = {
  type: string;
  format: string;
  version: string;
  data: Record<string, Champion>;
};

export type ChampionDetail = {};
