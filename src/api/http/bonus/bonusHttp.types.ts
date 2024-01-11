import type { Seo } from '../shared';

export interface Bonus {
  btn_is_active: boolean;
  btn_title: string;
}

export interface BonusProgram {
  title: string;
  description: string;
}

export interface Calculator {
  title: string;
  subtitle: string;
  'subtitle-2': string;
  subtext: string;
  discount: string;
  size_from: string;
  size_up: string;
}

export interface GetBonusPageInfoData {
  seo: Seo;
  title: string;
  slug: string;
  bonus: Bonus;
  bonus_img: string;
  bonus_program: BonusProgram[];
  calculator: Calculator;
}
