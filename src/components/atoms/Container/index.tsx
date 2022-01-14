import React from 'react';

import { FluidContainer } from './styles';

export interface IContainerProps {
  align?: string;
  justify?: string;
}

export const Container: React.FC<IContainerProps> = ({
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
