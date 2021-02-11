import React from 'react';

import { CardImageContainer } from './styles';

const CardImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <CardImageContainer {...props}></CardImageContainer>;
};

export default CardImage;
