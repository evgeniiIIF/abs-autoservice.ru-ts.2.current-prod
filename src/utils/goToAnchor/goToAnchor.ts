export const goToAnchor = (anchorId: string, offsetTop: number) => {
  const anchor = document.getElementById(anchorId);
  const wrapper = document.querySelector('.wrapper');

  if (anchor && wrapper) {
    const scrollTop = anchor.getBoundingClientRect().top + wrapper.scrollTop - offsetTop;

    wrapper?.scrollTo({ top: scrollTop, behavior: 'smooth' });
  }
};
