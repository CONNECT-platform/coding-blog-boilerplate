import { themedStyle } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core';


export const HeroStyle = themedStyle<CodedocTheme>(theme => ({
  hero: {
    width: '100vw',
    maxWidth: 'none',
    marginLeft: 'calc(384px - 50vw)',

    'body.dark &[data-mode="light"]': {
      display: 'none'
    },

    '@media (prefers-color-scheme: dark)': {
      'body:not(.dark-mode-animate) &[data-mode="light"]': {
        display: 'none'
      }
    },

    'body.dark-mode-animate:not(.dark) &[data-mode="dark"]': {
      display: 'none'
    },

    '@media (prefers-color-scheme: light)': {
      'body:not(.dark-mode-animate) &[data-mode="dark"]': {
        display: 'none'
      }
    },
  }
}));