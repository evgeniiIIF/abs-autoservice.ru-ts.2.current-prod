export type OfferCard = {
  id?: number;
  title?: string;
  descriptions?: string;
  image?: {
    image_path?: string;
    image_alt?: string;
    image_title?: string;
  };
  link?: string;
  button?: {
    text?: string;
    size?: 'small' | 'big';
    fill: 'solid' | 'outline';
  };
};
