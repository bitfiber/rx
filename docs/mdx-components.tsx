import {useMDXComponents as getDocsMDXComponents} from 'nextra-theme-docs';
import {Cards} from 'nextra/components';
import {Badge} from './components/Badge';
import {RefCards} from './components/RefCards';
import {UtLink} from './components/UtLink';

const docsComponents = getDocsMDXComponents();

export function useMDXComponents(components?: Record<string, React.ComponentType>) {
  return {
    ...docsComponents,
    Badge,
    RefCards,
    UtLink,
    Cards,
    ...components,
  };
}
