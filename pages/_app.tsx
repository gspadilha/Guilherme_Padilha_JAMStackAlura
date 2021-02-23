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
  const { value, toggle } = useDarkMode(true, {
    storageKey: '',
    onChange: undefined,
  });

  const { fontFamily, colors } = theme;
  const modeSelected = value ? colors.dark : colors.light;
  const themeSelected = { ...modeSelected, fontFamily };

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
