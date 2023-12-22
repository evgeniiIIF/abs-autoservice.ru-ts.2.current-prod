export type OfferCard = {
  id?: number;
  title?: string;
  descriptions?: string;
  image?: string;
  link?: string;
  button?: {
    text?: string;
    size?: 'small' | 'big';
    fill: 'solid' | 'outline';
  };
};
