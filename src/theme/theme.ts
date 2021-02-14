export const theme = {
  fontFamily: {
    primary: 'Fira Sans',
    secondary: 'Fira Sans Condensed',
  },
  colors: {
    light: {
      isLight: true,

      backgroundImage: '/images/background-capa.jpg',
      backgroundImageInverted: '/images/background-capa-inverted.jpg',

      primary: '#e9c46a',
      secondary: '#a8d9f2',

      backgroundColor: '#fff8e6',

      fontColor: {
        primary: '#000000',
        secondary: '#fff8e6',
      },
    },
    dark: {
      isLight: false,

      backgroundImage: '/images/background-capa-dark.jpg',
      backgroundImageInverted: '/images/background-capa-inverted-dark.jpg',

      primary: '#163b95',
      secondary: '#57260d',

      backgroundColor: '#000719',

      fontColor: {
        primary: '#fff8e6',
        secondary: '#000000',
      },
    },
  },
};
