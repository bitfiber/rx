import {Footer, Layout, Navbar} from 'nextra-theme-docs';
import {Head} from 'nextra/components';
import {getPageMap} from 'nextra/page-map';
import 'nextra-theme-docs/style.css';
import '../styles.css';

import {Logo, Footer as BfFooter} from '../';
import {gitHost} from '../config/constants';

export const metadata = {
  title: 'Bitfiber Rx Docs',
  description: 'Bitfiber Rx Docs',
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
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
          href="/assets/favicon.ico"
        />
      </Head>
      <body>
        <Layout
          pageMap={await getPageMap()}
          navbar={
            <Navbar
              logo={<Logo />}
              projectLink={gitHost}
            />
          }
          footer={<Footer><BfFooter /></Footer>}
          docsRepositoryBase={`${gitHost}tree/main/docs`}
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
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
