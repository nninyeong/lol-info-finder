import { DataImage } from '@/types/common';

type GoldType = {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
};

export type Item = {
  name: string;
  plaintext: string;
  image: DataImage;
  gold: GoldType;
  tags: string[];
  stats: object;
};

export type ItemData = { data: Record<string, Item> };
