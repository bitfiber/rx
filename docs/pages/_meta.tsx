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
  },
  sources: {
    title: 'Data Sources',
    type: 'page',
  },
  operators: {
    title: 'Operators',
    type: 'page',
  },
  about: {
    title: 'About',
    type: 'page',
  },
  otherProjects: {
    title: 'Other Projects',
    type: 'menu',
    items: {
      rxStore: {
        title: 'Ng Store',
        href: ngHost,
      },
      jsUtils: {
        title: 'JS Utils',
        href: utilsHost,
      },
    },
  },
};
