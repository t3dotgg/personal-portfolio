const customMediaQuery = (maxWidth: number) =>
  `@media (min-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1400),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(425),
};
