import { RendererLike } from '@connectv/html';
import { File } from 'rxline/fs';
import { Page, Meta, ContentNav, Fonts, ToC, GithubSearch$ } from '@codedoc/core/components';

import { config } from '../config';
import { Header } from './header';
import { Footer } from './footer';


export function content(_content: HTMLElement, toc: HTMLElement, renderer: RendererLike<any, any>, file: File<string>) {
  return (
    <Page title={config.page.title.extractor(_content, config, file)}
          favicon={config.page.favicon}
          meta={<Meta {...config.page.meta}/>}
          fonts={<Fonts {...config.page.fonts}/>}

          scripts={[...config.page.scripts || [], 
            (config.misc?.github ? 
              <script>{`window.githubConfig = ${JSON.stringify(config.misc.github)}`}</script> : 
              <fragment/>)]}
          stylesheets={[...config.page.stylesheets || [], <style>{`.container{padding-top: 0 !important}`}</style>]}

          header={<Header {...config}/>}
          footer={<Footer {...config}/>}
          toc={<ToC>{toc}</ToC>}>
      <script>{`window.source = ${JSON.stringify({ path: file.path, base: config.src.base })}`}</script>
      {_content}
      <ContentNav content={_content}/>
    </Page>
  )
}
