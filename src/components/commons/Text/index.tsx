import React, { ReactNode } from 'react';
import { TextContent } from './styles';

interface ITextProps {
  children: string | number | React.ReactNode;
  tag?: 'p' | 'span' | undefined;
}

export const Text = ({ children, tag }: ITextProps) => {
  const finalTag = tag === undefined ? 'span' : tag;

  return <TextContent as={finalTag}>{children}</TextContent>;
};
