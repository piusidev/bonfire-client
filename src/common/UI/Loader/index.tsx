import React from 'react';

import { LoaderSection } from './styles';
import BonfireGif from '../../assets/images/Loader/bonfire.gif';

export const Loader: React.FC = () => {
  return (
    <LoaderSection>
      <img src={BonfireGif} alt="Loading..." />
    </LoaderSection>
  );
};
