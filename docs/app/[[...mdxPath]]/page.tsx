import {generateStaticParamsFor, importPage} from 'nextra/pages';

import {useMDXComponents as getMDXComponents} from '../../mdx-components';

export const generateStaticParams = generateStaticParamsFor('mdxPath');

const Wrapper = getMDXComponents({}).wrapper;

export default async function Page(props: {params: Promise<{mdxPath?: string[]}>}) {
  const params = await props.params;
  const {default: MDXContent, ...rest} = await importPage(params.mdxPath);
  return (
    <Wrapper {...rest}>
      <MDXContent {...props} params={params}/>
    </Wrapper>
  );
}
