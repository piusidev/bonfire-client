import React from 'react';

import { FluidContainer } from './styles';

export interface ContainerProps {
  align?: string;
  justify?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  align,
  justify,
}) => {
  return (
    <FluidContainer align={align} justify={justify}>
      {children}
    </FluidContainer>
  );
};
