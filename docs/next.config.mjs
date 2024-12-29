import nextra from 'nextra';

export const isProd = process.env.NODE_ENV === 'production';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
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
