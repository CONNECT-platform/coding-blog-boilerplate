import { CodedocConfig } from '@codedoc/core';
import { Header as _Header, Watermark } from '@codedoc/core/components';


export function Header(config: CodedocConfig, renderer: any) {
  return (
    <_Header>
      <Watermark/>
    </_Header>
  )
}
