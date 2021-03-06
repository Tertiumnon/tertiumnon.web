import { IProject } from './shared/project/project';

const PROJECTS: IProject[] = [
  {
    title: 'Kvartal 2000',
    type: 'Website',
    description: 'Website for a real estate agency',
    imagePreview:
      '/assets/images/projects/kvartal2000-web/2008-kvartal2000-web-preview.png',
    image: '/assets/images/projects/kvartal2000-web/2008-kvartal2000-web.png',
    link: '',
    year: 2008,
    categories: ['design', 'layout'],
    active: false,
    visibility: true
  },
  {
    title: 'Kvartal 2000',
    type: 'Website',
    description: 'Website for a real estate agency',
    imagePreview:
      '/assets/images/projects/kvartal2000-web/2009-kvartal2000-web-preview.png',
    image: '/assets/images/projects/kvartal2000-web/2009-kvartal2000-web.png',
    link: '',
    year: 2009,
    categories: ['design', 'layout'],
    active: false,
    visibility: true
  },
  {
    title: 'Locman Kvartir',
    type: 'Website',
    description: 'Website for a real estate listing',
    imagePreview:
      '/assets/images/projects/locman-kvartir-web/2008-locman-kvartir-web-preview.png',
    image:
      '/assets/images/projects/locman-kvartir-web/2008-locman-kvartir-web.png',
    link: '',
    year: 2010,
    categories: ['design', 'layout'],
    active: false,
    visibility: true
  },
  {
    title: 'Arsenal SB',
    type: 'Website',
    description: 'Website for CCTV sales company',
    imagePreview:
      '/assets/images/projects/arsenal-sb-web/2011-arsenal-sb-web-preview.png',
    image: '/assets/images/projects/arsenal-sb-web/2011-arsenal-sb-web.png',
    link: '',
    year: 2011,
    categories: ['design', 'layout'],
    active: false,
    visibility: true
  },
  {
    title: 'PROvision',
    type: 'Website',
    description: 'Website for CCTV manufacturing company',
    imagePreview:
      '/assets/images/projects/provision-web/2012-provision-web-preview.png',
    image: '/assets/images/projects/provision-web/2012-provision-web.png',
    link: '',
    year: 2012,
    categories: ['design', 'layout', 'coding'],
    active: false,
    visibility: true
  },
  {
    title: 'Alert CCTV',
    type: 'Website',
    description: 'Website for CCTV manufacturing company',
    imagePreview:
      '/assets/images/projects/alert-cctv-web/2012-alert-cctv-web-preview.png',
    image: '/assets/images/projects/alert-cctv-web/2012-alert-cctv-web.png',
    link: '',
    year: 2012,
    categories: ['design', 'layout', 'coding'],
    active: false,
    visibility: true
  },
  {
    title: 'Katerinafee Shop',
    type: 'Website',
    description: 'Online shop for a fashion designer',
    imagePreview:
      '/assets/images/projects/katerinafee-web/2013-katerinafee-web-preview.png',
    image: '/assets/images/projects/katerinafee-web/2013-katerinafee-web.png',
    link: '',
    year: 2013,
    categories: ['design', 'layout'],
    active: false,
    visibility: true
  },
  {
    title: 'Katerinafee',
    type: 'Website',
    description: 'Website for a fashion designer',
    imagePreview:
      '/assets/images/projects/katerinafee-web/2013-katerinafee-web-preview.png',
    image: '/assets/images/projects/katerinafee-web/2013-katerinafee-web.png',
    link: 'http://www.katerinafee.com',
    year: 2014,
    categories: ['design', 'layout'],
    active: false,
    visibility: true
  },
  {
    title: 'Enso Photo',
    type: 'Website',
    description: 'Photographer portfolio website',
    imagePreview:
      '/assets/images/projects/enso-photo-web/2014-enso-photo-web-preview.png',
    image: '/assets/images/projects/enso-photo-web/2014-enso-photo-web.png',
    link: '',
    year: 2014,
    categories: ['design', 'layout', 'coding'],
    active: false,
    visibility: true
  },
  {
    title: 'Yandex Browser',
    type: 'Web browser',
    description: 'Yandex Browser concept',
    imagePreview:
      '/assets/images/projects/yandex-browser-app/2017-yandex-browser-app-preview.png',
    image:
      '/assets/images/projects/yandex-browser-app/2017-yandex-browser-app.png',
    link: '',
    year: 2017,
    categories: ['concept'],
    active: false,
    visibility: true
  },
  {
    title: 'Butterfly Browser',
    type: 'Web browser',
    description: 'Ligthweight web browser concept',
    imagePreview:
      '/assets/images/projects/butterfly-browser-app/2016-butterfly-browser-app-preview.png',
    image:
      '/assets/images/projects/butterfly-browser-app/2016-butterfly-browser-app.png',
    link: '',
    year: 2016,
    categories: ['concept'],
    active: false,
    visibility: true
  },
  {
    title: 'JKH Service',
    type: 'Website',
    description: 'Landing website for a building company',
    imagePreview: '',
    image: '',
    link: '',
    year: 2018,
    categories: ['design'],
    active: false,
    visibility: true
  },
  {
    title: 'Tertium Cheatsheets',
    type: 'Website',
    description: 'Cheatsheets for programmers',
    imagePreview: '',
    image: '',
    link: 'http://cheatsheets.origin-creative-studio.com',
    year: 2017,
    categories: ['design', 'layout', 'coding'],
    active: false,
    visibility: true
  },
  {
    title: 'Send Text To Form',
    type: 'Web extension',
    description: 'Chrome extension for sending text to web pages using forms',
    imagePreview: '',
    image: '/assets/images/projects/send-text-to-form-web-ext/2017-send-text-to-form-web-ext.png',
    link: 'https://chrome.google.com/webstore/detail/send-text-to-form/oapmpchdbmlmblgeambfmcmmoalbgooi',
    year: 2017,
    categories: ['design', 'layout', 'coding'],
    active: false,
    visibility: true
  },
  {
    title: 'Bookmarks Manager',
    type: 'Web extension',
    description: 'Firefox extension for bookmarks organizing',
    imagePreview: '',
    image: '',
    link: 'https://addons.mozilla.org/en-US/firefox/addon/bookmarks-manager/',
    year: 2017,
    categories: ['design', 'layout', 'coding'],
    active: false,
    visibility: true
  },
  {
    title: 'Tertium JS Snippets',
    type: 'App extension',
    description: 'Visual Studio Code extension for JavaScript autocompletion',
    imagePreview: '',
    image: '',
    link: 'https://marketplace.visualstudio.com/items?itemName=vittertiumnon.tertium-js-snippets',
    year: 2019,
    categories: ['design', 'coding'],
    active: false,
    visibility: true
  },
  {
    title: 'TASS Wiki',
    type: 'Website',
    description: 'Information agency wiki website',
    imagePreview: '',
    image: '',
    link: '',
    year: 2015,
    categories: ['design', 'layout', 'coding'],
    active: true,
    visibility: true
  },
  {
    title: 'TASS HRStat',
    type: 'Website',
    description: 'Information agency productivity statistics website',
    imagePreview: '',
    image: '',
    link: '',
    year: 2016,
    categories: ['layout', 'coding'],
    active: true,
    visibility: true
  },
  {
    title: 'JSON All to One',
    type: 'NodeJS package',
    description: 'NodeJS script for JSON files concatenation',
    imagePreview: '',
    image: '',
    link: 'https://www.npmjs.com/package/json-all-to-one',
    year: 2019,
    categories: ['design', 'coding'],
    active: true,
    visibility: true
  },
  {
    title: 'JSON to SQL script',
    type: 'NodeJS package',
    description: 'NodeJS script that creates SQL script from JSON file',
    imagePreview: '',
    image: '',
    link: 'https://www.npmjs.com/package/json-to-sql-script',
    year: 2019,
    categories: ['design', 'coding'],
    active: true,
    visibility: true
  },
  {
    title: 'Tertium Icons',
    type: 'NodeJS package',
    description: 'SVG and font icons',
    imagePreview: '',
    image: '',
    link: 'https://www.npmjs.com/package/tertium.icons',
    year: 2017,
    categories: ['design', 'coding'],
    active: true,
    visibility: true
  }
];

export default PROJECTS;
