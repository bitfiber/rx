import {ngHost, utilsHost} from '../';

export default {
  index: {
    title: 'Home',
    type: 'page',
    display: 'hidden',
  },
  installation: {
    title: 'Installation',
    type: 'page',
    display: 'hidden',
  },
  store: {
    title: 'Store',
    type: 'page',
    theme: {
      sidebar: true,
      breadcrumb: true,
      toc: true,
    },
  },
  sources: {
    title: 'Data Sources',
    type: 'page',
    theme: {
      sidebar: true,
      breadcrumb: true,
      toc: true,
    },
  },
  operators: {
    title: 'Operators',
    type: 'page',
    theme: {
      sidebar: true,
      breadcrumb: true,
      toc: true,
    },
  },
  about: {
    title: 'About',
    type: 'page',
    theme: {
      layout: 'default',
    },
  },
  otherProjects: {
    title: 'Other Projects',
    type: 'menu',
    items: {
      ng: {
        title: 'Bitfiber Angular',
        href: ngHost,
      },
      utils: {
        title: 'Bitfiber Utils',
        href: utilsHost,
      },
    },
  },
};
