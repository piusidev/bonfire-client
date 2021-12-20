export interface CustomTheme {
  title?: string;
  colors?: {
    background?: string;
  };
  fonts: {
    primary: string;
  }
  fontSizes?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  fontWeights?: {
    hairline: number;
    thin?: number;
    light?: number;
    normal?: number;
    medium?: number;
    semibold?: number;
    bold?: number;
    extrabold?: number;
    black?: number;
  },
  lineHeights?: {
    normal?: string;
    none?: number;
    shorter?: number;
    short?: number;
    base?: number;
    tall?: number;
    taller?: string;
  },
  letterSpacings?: {
    tighter?: string;
    tight?: string;
    normal?: string;
    wide?: string;
    wider?: string;
    widest?: string;
  },
  zIndices?: {
    hide?: number;
    auto?: string;
    base?: number;
    docked?: number;
    dropdown?: number;
    sticky?: number;
    banner?: number;
    overlay?: number;
    modal?: number;
    popover?: number;
    skipLink?: number;
    toast?: number;
    tooltip?: number;
  },
  radius?: {
    none?: string;
    sm?: string;
    base?: string;
    md?: string;
    lg?: string;
    xl?: string;
    full?: string;
  },
  breakpoints?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  },
  sizes?: {
    container?: {
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
    },
  }
}