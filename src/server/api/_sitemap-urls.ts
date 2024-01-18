import { defineEventHandler } from 'h3';

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const [services]: any[] = await Promise.all([$fetch(`${config.public.apiBaseUrl}/services`)]);

  return [
    ...services.data.map((s: any) => ({
      loc: `/services/${s.slug}`,
    })),
  ];
});
