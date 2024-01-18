// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  devtools: true,
  nitro: {
    compressPublicAssets: true,
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    'nuxt-svgo',
    '@nuxt/image',
    'nuxt-swiper',
    '@nuxt/image',
    'nuxt-viewport',
    'nuxt-simple-sitemap',
    'nuxt-schema-org',
    'nuxt-delay-hydration',
  ],
  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === 'development',
    mode: 'mount',
  },
  googleFonts: {
    overwriting: true,
    preload: true,
    families: {
      Roboto: [100, 400, 500, 700],
      download: true,
    },
    subsets: ['cyrillic', 'latin'],
  },
  svgo: {
    autoImportPath: './assets/icons/',
    componentPrefix: 'Ic',
    svgoConfig: {
      multipass: true,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              // or disable plugins
              removeDoctype: false,
              removeViewBox: false,
              cleanupIds: false,
            },
          },
        },
      ],
    },
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  css: ['@/assets/style/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/style/variables.scss";
            @import "@/assets/style/mixins.scss";
            @import "@/assets/style/fonts.scss";
            @import "@/assets/style/smart-grid--mobile-first.scss";
          `,
        },
      },
    },
  },
  swiper: {
    styleLang: 'scss',
  },
  image: {
    domains: [process.env.NUXT_PUBLIC_API_DOMAIN as string],
    format: ['webp', 'jpg', 'png'],
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
    },
  },
  site: {
    url: process.env.NUXT_PUBLICK_BASE_APP_URL,
  },
  viewport: {
    breakpoints: {
      mobile: 768,
      tabletSmall: 769,
      tablet: 1024,
      desktop: 1280,
    },
    cookieName: 'viewport',
    defaultBreakpoints: {
      mobile: 'mobile',
      tabletSmall: 'tabletSmall',
      tablet: 'tablet',
      desktop: 'desktop',
    },
    fallbackBreakpoint: 'desktop',
  },
});
