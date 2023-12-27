export const appRoutes = {
  main: () => ({ path: '/' }),
  offers: (slug?: string) => ({ path: `/offers${slug ? `/${slug}` : ''}` }),
  services: (slug?: any) => ({ path: `/services${slug ? `/${slug}` : ''}` }),
  about: () => ({ path: '/about' }),
  contacts: () => ({ path: '/contacts' }),
  bonus: () => ({ path: '/bonus' }),
  reviews: () => ({ path: '/reviews' }),
  privacyPolicy: () => ({ path: '/privacy-policy' }),
  vacancies: (slug?: string) => ({ path: `/vacancies/${slug || ''}` }),
  advantages: () => ({ path: `/advantages` }),
};
