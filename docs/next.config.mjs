import nextra from 'nextra';

const isProd = process.env.NODE_ENV === 'production';

const withNextra = nextra({
  defaultShowCopyCode: true,
  search: {codeblocks: false},
});

export default withNextra({
  reactStrictMode: true,
  trailingSlash: true,
  distDir: 'dist',
  basePath: isProd ? '/rx' : '',
  output: 'export',
  images: {unoptimized: true},
});
