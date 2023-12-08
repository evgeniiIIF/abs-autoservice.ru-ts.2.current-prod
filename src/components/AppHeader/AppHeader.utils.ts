export const getScrollWidth = () => {
  const div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  const scrollWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);

  return scrollWidth;
};

export const bodyLock = () => {
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = `${getScrollWidth()}px`;
  const headerNode = document.querySelector('header');
  if (headerNode) {
    headerNode.style.paddingRight = `${getScrollWidth()}px`;
  }
};

export const bodyUnlock = () => {
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
  const headerNode = document.querySelector('header');
  if (headerNode) {
    headerNode.style.paddingRight = '';
  }
};

export const setHeaderWidth = (selectorHeader: string) => {
  nextTick(() => {
    const headerNode: HTMLElement | null = document.querySelector(selectorHeader);
    if (headerNode) headerNode.style.width = `calc(100% - ${getScrollWidth()}px)`;
  });
};
