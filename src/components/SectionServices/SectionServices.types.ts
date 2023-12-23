export interface SectionServicesItemSubcategory {
  title: string;
  link: string;
}

export interface SectionServicesItemProps {
  item: {
    image: string;
    title: string;
    text?: string;
    link?: string;
    subcategories?: SectionServicesItemSubcategory[];
  };
}
