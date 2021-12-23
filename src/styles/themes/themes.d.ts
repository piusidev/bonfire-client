import 'styled-components';
import { CustomTheme } from './default.d';
declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
