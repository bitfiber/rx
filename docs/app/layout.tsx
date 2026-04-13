import {ReactNode} from 'react';
import {Footer, Layout, Navbar} from 'nextra-theme-docs';
import {Head} from 'nextra/components';
import {getPageMap} from 'nextra/page-map';
import 'nextra-theme-docs/style.css';
import '../styles.css';

import {Logo, Footer as BfFooter, gitHost, isProd, description} from '../';

export const metadata = {
  description,
  openGraph: {
    title: description,
    description,
  },
  appleWebApp: {
    title: description,
  },
};

export default async function RootLayout({children}: {children: ReactNode}) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head>
        <meta
          name="msapplication-TileColor"
          content="#fff"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href={`${isProd ? '/rx' : ''}/assets/favicon.ico`}
        />
      </Head>
      <body>
        <Layout
          pageMap={await getPageMap()}
          docsRepositoryBase={`${gitHost}tree/main/docs`}
          navbar={
            <Navbar
              logo={<Logo/>}
              projectLink={gitHost}
            />
          }
          sidebar={{
            defaultMenuCollapseLevel: 1,
            autoCollapse: false,
            toggleButton: true,
          }}
          toc={{
            title: 'On This Page',
            backToTop: true,
          }}
          feedback={{
            content: 'Feedback',
            labels: 'feedback',
            link: `${gitHost}issues`,
          }}
          footer={<Footer><BfFooter/></Footer>}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
