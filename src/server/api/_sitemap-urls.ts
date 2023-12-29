import { defineEventHandler } from 'h3';

export default defineEventHandler(async () => {
  const [services]: any[] = await Promise.all([$fetch(`${process.env.NUXT_PUBLIC_API_BASE_URL}/services`)]);

  return [
    ...services.data.map((s: any) => ({
      loc: `/services/${s.slug}`,
    })),
  ];
});
