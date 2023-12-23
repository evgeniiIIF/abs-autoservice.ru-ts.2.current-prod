// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  devtools: true,
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    'nuxt-svgo',
    '@nuxt/image',
    'nuxt-swiper',
    '@nuxt/image',
    'nuxt-viewport',
  ],

  googleFonts: {
    overwriting: true,
    preload: true,
    download: true,
    families: {
      Roboto: [100, 400, 500, 700],
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
      apiBaseUrl: 'NUXT_PUBLIC_API_BASE_URL',
    },
  },
  viewport: {
    breakpoints: {
      // xs: 320,
      // sm: 640,
      mobile: 768,
      tabletSmall: 769,
      tablet: 1024,
      desktop: 1280,
      // xl: 1281,
      // xxl: 1536,
    },
    cookieName: 'viewport',
    defaultBreakpoints: {
      mobile: 'mobile',
      // xs: 'xs',
      // sm: 'sm',
      tablet: 'tablet',
      desktop: 'desktop',
      // xl: 'xl',
      // xxl: 'xxl',
    },
    fallbackBreakpoint: 'xl',
  },
});
