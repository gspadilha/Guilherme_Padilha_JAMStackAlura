import React from 'react';
import { LinkContainer } from './styles';

interface ILinkProps {
  label: string;
  toUrl: string;
  isImage?: boolean;
}

export const Link = ({ label, toUrl, isImage }: ILinkProps) => {
  return (
    <LinkContainer href={toUrl}>
      {isImage ? <img src={label} /> : label}
    </LinkContainer>
  );
};
