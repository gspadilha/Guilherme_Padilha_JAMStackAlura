import { NextRouter } from 'next/dist/next-server/lib/router/router';
import { AppPropsType } from 'next/dist/next-server/lib/utils';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../src/theme';
import Head from 'next/head';
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
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Fira+Sans+Condensed:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={themeSelected}>
        <GlobalStyle />
        <ChangeTheme onClick={toggle} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
