const breakpoints = {
  xs: 0,
  sm: 576,
  md: 992,
  lg: 992,
  tab: 1100,
  xlg: 1500,
};

export const mediaQueryMinWidth = {
  xs: `@media (min-width: ${breakpoints.xs}px)`,
  sm: `@media (min-width: ${breakpoints.sm}px)`,
  md: `@media (min-width: ${breakpoints.md}px)`,
  lg: `@media (min-width: ${breakpoints.lg}px)`,
  tab: `@media (min-width: ${breakpoints.tab}px)`,
  xlg: `@media (min-width: ${breakpoints.xlg}px)`,
};
