<template>
  <div class="privacy">
    <slot />
  </div>
</template>

<style lang="scss">
.privacy {
  @include container;

  background: var(--white);
  p {
    margin: 0;
    color: #000000;
    font-size: 11pt;
    font-family: 'Arial';
  }

  h1 {
    padding-top: 20pt;
    color: #000000;
    font-size: 20pt;
    padding-bottom: 6pt;
    font-family: 'Arial';
    line-height: 1.15;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }

  h2 {
    padding-top: 18pt;
    color: #000000;
    font-size: 16pt;
    padding-bottom: 6pt;
    font-family: 'Arial';
    line-height: 1.15;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }

  h3 {
    padding-top: 16pt;
    color: #434343;
    font-size: 14pt;
    padding-bottom: 4pt;
    font-family: 'Arial';
    line-height: 1.15;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }

  h4 {
    padding-top: 14pt;
    color: #666666;
    font-size: 12pt;
    padding-bottom: 4pt;
    font-family: 'Arial';
    line-height: 1.15;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }

  h5 {
    padding-top: 12pt;
    color: #666666;
    font-size: 11pt;
    padding-bottom: 4pt;
    font-family: 'Arial';
    line-height: 1.15;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }

  h6 {
    padding-top: 12pt;
    color: #666666;
    font-size: 11pt;
    padding-bottom: 4pt;
    font-family: 'Arial';
    line-height: 1.15;
    page-break-after: avoid;
    font-style: italic;
    orphans: 2;
    widows: 2;
    text-align: left;
  }

  li {
    margin-left: 20px;
    margin-top: 2px;
  }
}
</style>
