export const useScrollTo = (props?: { behavior?: ScrollBehavior; delay?: number }) => {
  const behavior = props?.behavior ?? 'smooth';
  const delay = props?.delay ?? 0;

  const handleScrollTo: <T extends HTMLElement>(anchor?: T | null | string) => void = (
    anchor,
    callBack?: () => void,
  ) => {
    const element = typeof anchor === 'string' ? document.querySelector(anchor) : anchor;
    setTimeout(() => {
      window.scrollTo({
        behavior,
        top: element instanceof HTMLElement ? element.offsetTop - 88 : 0,
      });
      callBack?.();
    }, delay);
  };

  return { scrollTo: handleScrollTo };
};
