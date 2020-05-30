import { CodedocConfig } from '@codedoc/core';
import { Header as _Header } from '@codedoc/core/components';
import { Watermark } from '@codedoc/coding-blog-plugin/dist/es5/components';


export function Header(config: CodedocConfig, renderer: any) {
  return (
    <_Header>
      <Watermark/>
    </_Header>
  )
}
