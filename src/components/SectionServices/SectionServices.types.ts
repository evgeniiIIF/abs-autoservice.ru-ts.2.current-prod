export interface SectionServicesItemSubcategory {
  title: string;
  link: string;
}

export interface SectionServicesItemProps {
  item: {
    image: string;
    image_title: string;
    image_alt?: string;
    title: string;
    text?: string;
    link?: string;
    subcategories?: SectionServicesItemSubcategory[];
  };
}
