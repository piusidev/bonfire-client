export interface IThemeConfig {
  title?: string;
  colors?: IColors;
  fonts?: IFonts;
  fontSizes?: IFontSizes;
  fontWeights?: IFontWeights;
  lineHeights?: ILineHeights;
  letterSpacings?: ILetterSpacings;
  zIndices?: IZIndices;
  radius?: IRadius;
  breakpoints?: IBreakpoints;
  sizes?: ISizes;
}

export interface IColors {
  background?: string;
  primary: string;
  secondary: string;
  highlight: string;
  disabled: string;
  error: string;
  success: string;
  warning: string;
  white: string;
}

interface IFonts {
  primary?: string;
}

interface IFontSizes {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

interface IFontWeights {
  hairline?: number;
  thin?: number;
  light?: number;
  normal?: number;
  medium?: number;
  semibold?: number;
  bold?: number;
  extrabold?: number;
  black?: number;
}

interface ILineHeights {
  normal?: string;
  none?: number;
  shorter?: number;
  short?: number;
  base?: number;
  tall?: number;
  taller?: string;
}

interface ILetterSpacings {
  tighter?: string;
  tight?: string;
  normal?: string;
  wide?: string;
  wider?: string;
  widest?: string;
}

interface IZIndices {
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
}

interface IRadius {
  none?: string;
  sm?: string;
  base?: string;
  md?: string;
  lg?: string;
  xl?: string;
  full?: string;
}

interface IBreakpoints {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

interface ISizes {
  container?: IContainerSizes;
}

interface IContainerSizes {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}
