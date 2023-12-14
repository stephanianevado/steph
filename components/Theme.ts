import { createGlobalStyle } from 'styled-components'

export enum Color {
  PRIMARY_BLACK = 'primaryBlack',
  SECONDARY_BLACK = 'secondaryBlack',
  TERTIARY_BLACK = 'tertiaryBlack',
  PRIMARY_GREY = 'primaryGrey',
  SECONDARY_GREY = 'secondaryGrey',
  TERTIARY_GREY = 'tertiaryGrey',
  PRIMARY_WHITE = 'primaryWhite',
  SECONDARY_WHITE = 'secondaryWhite',
  PRIMARY_BLUE = 'primaryBlue',
}

export enum Breakpoint {
  MOBILE_S = 'MOBILE_S',
  MOBILE_M = 'MOBILE_M',
  MOBILE_L = 'MOBILE_L',
  TABLET = 'TABLET',
  LAPTOP = 'LAPTOP',
  LAPTOP_M = 'LAPTOP_M',
  LAPTOP_L = 'LAPTOP_L',
  DESKTOP = 'DESKTOP',
}

const fonts = {
  HEADING: 'Poppins, Pangea, sans-serif',
  BODY: 'Poppins, Pangea Text, sans-serif',
}

export const Theme = {
  colors: {
    [Color.PRIMARY_BLACK]: '#000000',
    [Color.SECONDARY_BLACK]: '#1A2029',
    [Color.TERTIARY_BLACK]: '#020C1B',
    [Color.PRIMARY_GREY]: '#758BA9',
    [Color.SECONDARY_GREY]: '#F0F0F0',
    [Color.TERTIARY_GREY]: '#8C96A3',
    [Color.PRIMARY_WHITE]: '#FFFFFF',
    [Color.SECONDARY_WHITE]: '#E6F1FF',
    [Color.PRIMARY_BLUE]: '#342CDB',
  },
  breakpoints: {
    [Breakpoint.MOBILE_S]: '@media (min-width: 320px)',
    [Breakpoint.MOBILE_M]: '@media (min-width: 375px)',
    [Breakpoint.MOBILE_L]: '@media (min-width: 425px)',
    [Breakpoint.TABLET]: '@media (min-width: 768px)',
    [Breakpoint.LAPTOP]: '@media (min-width: 1024px)',
    [Breakpoint.LAPTOP_M]: '@media (min-width: 1260px)',
    [Breakpoint.LAPTOP_L]: '@media (min-width: 1440px)',
    [Breakpoint.DESKTOP]: '@media (min-width: 2560px)',
  },
  fonts,
  typography: {
    vader: {
      fontFamily: fonts.HEADING,
      fontWeight: 500,
      fontSize: 42,
      lineHeight: 48 / 40,
      letterSpacing: 0.6,
    },
    padme: {
      fontFamily: fonts.HEADING,
      fontWeight: 500,
      fontSize: 40,
      lineHeight: 48 / 40,
      letterSpacing: 0.6,
    },
    anakin: {
      fontFamily: fonts.HEADING,
      fontWeight: 500,
      fontSize: 28,
      lineHeight: 36 / 28,
      letterSpacing: 0.6,
    },
    ashoka: {
      fontFamily: fonts.HEADING,
      fontSize: 24,
      lineHeight: 32 / 24,
      letterSpacing: 0.6,
      variants: {
        normal: {
          fontWeight: 400,
        },
        bold: {
          fontWeight: 500,
        },
      },
    },
    leia: {
      fontFamily: fonts.HEADING,
      fontSize: 20,
      lineHeight: 28 / 20,
      letterSpacing: 0.6,
      variants: {
        normal: {
          fontWeight: 400,
        },
        bold: {
          fontWeight: 500,
        },
      },
    },
    luke: {
      fontFamily: fonts.BODY,
      fontSize: 16,
      lineHeight: 24 / 16,
      letterSpacing: 0.6,
      variants: {
        normal: {
          fontWeight: 400,
        },
        bold: {
          fontWeight: 500,
        },
      },
    },
    obi: {
      fontFamily: fonts.BODY,
      fontSize: 14,
      lineHeight: 20 / 14,
      letterSpacing: 0.6,
      variants: {
        normal: {
          fontWeight: 400,
        },
        bold: {
          fontWeight: 500,
        },
      },
    },
  },
}

export const GlobalStyle = createGlobalStyle`
  html, 
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: ${Theme.colors.primaryWhite};
  }

  body {
    display: flex; 
    flex-direction: column; 
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button,
  input {
    font-family: ${Theme.typography.padme.fontFamily};
    margin-top: 0
  }

  body,
  p,
  a,
  footer {
    font-family: ${Theme.typography.luke.fontFamily};
    font-size: ${Theme.typography.luke.fontSize};
    font-weight: ${Theme.typography.luke.variants.normal};
    line-height: ${Theme.typography.luke.lineHeight};
    color: ${Theme.colors.tertiaryBlack};
  }
`