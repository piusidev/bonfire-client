import React from 'react';

import { FluidContainer } from './styles';

export interface IContainerProps {
  align?: string;
  justify?: string;
  fullscreen?: boolean;
}

export const Container: React.FC<IContainerProps> = ({
  children,
  align,
  justify,
  fullscreen,
}) => {
  return (
    <FluidContainer align={align} justify={justify} fullscreen={fullscreen}>
      {children}
    </FluidContainer>
  );
};
