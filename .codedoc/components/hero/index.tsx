import { RendererLike } from '@connectv/html';
import { ThemedComponentThis } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core';

import { HeroStyle } from './style';


export interface HeroOptions {
  src: string;
  mode?: 'light' | 'dark';
  target?: 'mobile' | 'desktop';
}


export function Hero(
  this: ThemedComponentThis<CodedocTheme>,
  options: HeroOptions,
  renderer: RendererLike<any, any>,
  content: any,
) {
  const classes = this.theme.classes(HeroStyle);
  const opts: {[key: string]: string} = { class: classes.hero };
  if (options.mode) opts['data-mode'] = options.mode;
  if (options.target) opts['data-target'] = options.target;
  return <div {...opts}>
    <img src={options.src} class={classes.image}/>
    <span class={classes.caption}>{content}</span>
  </div>;
}