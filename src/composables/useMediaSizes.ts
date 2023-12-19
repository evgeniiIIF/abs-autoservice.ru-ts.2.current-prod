export const useMediaSizes = () => {
  const { breakpoint, isLessThan } = useViewport();

  const isMobile = computed(() => breakpoint.value === 'mobile');
  // const isXs = computed(() => breakpoint.value === 'xs');
  // const isSm = computed(() => breakpoint.value === 'sm');
  const isTablet = computed(() => breakpoint.value === 'tablet');
  const isDesktop = computed(() => breakpoint.value === 'desktop');
  const isXl = computed(() => breakpoint.value === 'xl');
  const isXxl = computed(() => breakpoint.value === 'xxl');

  const isMoreThanMobile = computed(() => !isLessThan('tablet'));
  const isMoreThanTablet = computed(() => !isLessThan('desktop'));

  return {
    isDesktop,
    isMobile,
    isTablet,
    // isXs,
    // isSm,
    isXl,
    isXxl,
    isMoreThanMobile,
    isMoreThanTablet,
  };
};
