import { RendererLike, rxLiteral as rxl } from '@connectv/html';
import { transport } from '@connectv/sdh/transport';
import { ThemedComponentThis } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core';
import { BehaviorSubject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { AuthorStyle } from './style';


export interface AuthorOptionsDirect {
  name: string;
  date: string;
  avatar?: string;
  url?: string;
}


export interface AuthorOptionsFetch {
  src: 'github';
}


function isDirect(options: AuthorOptionsDirect | AuthorOptionsFetch) : options is AuthorOptionsDirect {
  return !(options as any).src;
}


interface CommitType {
  commit: {
    author: {
      date: string;
      name: string;
    }
  },
  author: {
    avatar_url: string;
    html_url: string;
  }
}


const _DefaultAvatar = 'https://www.wallpaperup.com/uploads/wallpapers/2017/09/17/1099153/afb7cf163e10008fb6ca7ca80e8c9a6d-700.jpg';


export function Author(
  this: ThemedComponentThis<CodedocTheme>,
  options: AuthorOptionsDirect | AuthorOptionsFetch,
  renderer: RendererLike<any, any>
) {
  const classes = this.theme.classes(AuthorStyle);
  const avatar = new BehaviorSubject<string>(_DefaultAvatar);
  const name = new BehaviorSubject<string>('Anonymous Author');
  const date = new BehaviorSubject<string>('Unspecified Date');
  const url = new BehaviorSubject<string>('');

  this.track({
    bind() {
      if (isDirect(options)) {
        name.next(options.name);
        date.next(options.date);
        if (options.avatar) avatar.next(options.avatar);
        if (options.url) url.next(options.url);
      } else {
        if (options.src === 'github') {
          const src = (window as any).source;
          const github = (window as any).githubConfig;
          if (src && github) {
            ajax.getJSON<CommitType[]>(`https://api.github.com/repos/${github.user}/${github.repo}/commits`
                      + `?path=${src.base}/${src.path}`)
              .subscribe(res => {
                if (res.length) {
                  const commit = res[0];
                  avatar.next(commit.author.avatar_url || _DefaultAvatar);
                  url.next(commit.author.html_url);
                  name.next(commit.commit.author.name);
                  date.next(new Date(commit.commit.author.date).toDateString());
                }
              });
          }
        }
      }
    }
  })

  return <a class={classes.author} href={url} target="_blank">
    <div class={classes.avatar} style={rxl`background-image: url(${avatar})`}/>
    <div class={classes.texts}>
      <div class={classes.name}>{name}</div>
      <div class={classes.date}><label>Last Publish:</label> {date}</div>
    </div>
  </a>
}


export const Author$ = /*#__PURE__*/transport(Author);