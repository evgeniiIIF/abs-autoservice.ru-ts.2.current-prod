export interface BonusPageSeo {
  title: string;
  description: string;
  key_words: any;
  author: string;
  robots: string;
  canonical_url: any;
  image: string;
  'og:type': string;
  'og:title': string;
  'og:description': string;
  'twitter:card': string;
  'twitter:title': string;
  'twitter:description': string;
}

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
  seo: BonusPageSeo;
  title: string;
  slug: string;
  bonus: Bonus;
  bonus_img: string;
  bonus_program: BonusProgram[];
  calculator: Calculator;
}
