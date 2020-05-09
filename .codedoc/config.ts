
import { configuration, 
  DefaultMarkdownCustomComponents,
} from '@codedoc/core';

import { theme } from './theme';
import { Hero } from './components/hero';


export const config = /*#__PURE__*/configuration({
  theme,
  src: {
    base: 'posts'
  },
  dest: {
    namespace: '/coding-blog-boilerplate',    // --> change this if you want to also deploy to GitHub Pages
    html: 'dist',
    assets: process.env.GITHUB_BUILD === 'true' ? 'dist' : '.',
    bundle: process.env.GITHUB_BUILD === 'true' ? 'bundle' : 'dist/bundle',
    styles: process.env.GITHUB_BUILD === 'true' ? 'styles' : 'dist/styles',
  },
  page: {
    title: {
      base: 'Coding Blog Boilerplate'         // --> change this to change your blog's title
    },
    favicon: '/favicon.ico'
  },
  markdown: {
    customComponents: {
      ...DefaultMarkdownCustomComponents,
      Hero
    },
  }
});
