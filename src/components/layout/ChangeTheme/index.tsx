import React, { ButtonHTMLAttributes } from 'react';

import { ChangeThemeContainer, ChangeThemeIcon } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const ChangeTheme: React.FC<ButtonProps> = ({
  children,
  loading,
  ...otherProps
}) => (
  <ChangeThemeContainer {...otherProps}>
    <ChangeThemeIcon />
  </ChangeThemeContainer>
);

export default ChangeTheme;
