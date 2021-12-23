export interface CustomTheme {
  title?: string;
  colors?: Colors;
  fonts?: Fonts;
  fontSizes?: FontSizes;
  fontWeights?: FontWeights;
  lineHeights?: LineHeights;
  letterSpacings?: LetterSpacings;
  zIndices?: ZIndices;
  radius?: Radius;
  breakpoints?: Breakpoints;
  sizes?: Sizes;
}

export interface Colors {
  background?: string;
}

interface Fonts {
  primary?: string;
}

interface FontSizes {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

interface FontWeights {
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

interface LineHeights {
  normal?: string;
  none?: number;
  shorter?: number;
  short?: number;
  base?: number;
  tall?: number;
  taller?: string;
}

interface LetterSpacings {
  tighter?: string;
  tight?: string;
  normal?: string;
  wide?: string;
  wider?: string;
  widest?: string;
}

interface ZIndices {
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

interface Radius {
  none?: string;
  sm?: string;
  base?: string;
  md?: string;
  lg?: string;
  xl?: string;
  full?: string;
}

interface Breakpoints {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

interface Sizes {
  container?: ContainerSizes
}

interface ContainerSizes {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}
