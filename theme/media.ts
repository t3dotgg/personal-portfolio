const customMediaQuery = (maxWidth: number) =>
  `@media (min-width: ${maxWidth / 16}rem)`;

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1400),
  desktopL: customMediaQuery(1600),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(425),
};
