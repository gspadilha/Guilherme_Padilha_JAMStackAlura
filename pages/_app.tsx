import { NextRouter } from 'next/dist/next-server/lib/router/router';
import { AppPropsType } from 'next/dist/next-server/lib/utils';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../src/theme';
import useDarkMode from 'use-dark-mode';
import ChangeTheme from '../src/components/layout/ChangeTheme';

export default function App({
  Component,
  pageProps,
}: PropsWithChildren<AppPropsType<NextRouter, {}>>) {
  const { value, toggle } = useDarkMode(false, {
    storageKey: '',
    onChange: undefined,
  });
  const themeSelected = value ? theme.colors.dark : theme.colors.light;

  return (
    <>
      <ThemeProvider theme={themeSelected}>
        <GlobalStyle />
        <ChangeTheme onClick={toggle} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
