import {ComponentType} from 'react';
import {useMDXComponents as getDocsMDXComponents} from 'nextra-theme-docs';
import {Cards} from 'nextra/components';

import {Badge, UtLink, RefCards} from './';

const docsComponents = getDocsMDXComponents({});

export function useMDXComponents(components?: Record<string, ComponentType>) {
  return {
    ...docsComponents,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Badge, RefCards, UtLink, Cards,
    ...components,
  };
}
