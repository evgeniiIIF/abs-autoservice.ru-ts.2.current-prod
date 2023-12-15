export interface BonusCard {
  text: string;
  title: string;
  btn_link: string;
  subtitle: string;
  btn_title: string;
  btn_is_modal: boolean;
  btn_is_active: boolean;
  image: string;
}

export interface BonusCardResponse {
  data: BonusCard;
}
