import loadcomponents from '@/tools/loadcomponents';

export default [
  {
    path: 'start',
    name: 'Start',
    component: loadcomponents.load('Start', 'views', '/doc'),
  },
  {
    path: 'install',
    name: 'Install',
    component: loadcomponents.load('Install', 'views', '/doc'),
  },
  {
    path: 'color',
    name: 'Color',
    component: loadcomponents.load('Color', 'views', '/doc'),
  },
  {
    path: 'font',
    name: 'Font',
    component: loadcomponents.load('Font', 'views', '/doc'),
  },
  {
    path: 'icon',
    name: 'Icon',
    component: loadcomponents.load('Icon', 'views', '/doc'),
  },
  {
    path: 'grid',
    name: 'Grid',
    component: loadcomponents.load('Grid', 'views', '/doc'),
  },
  {
    path: 'layout',
    name: 'Layout',
    component: loadcomponents.load('Layout', 'views', '/doc'),
  },
  {
    path: 'header',
    name: 'Header',
    component: loadcomponents.load('Header', 'views', '/doc'),
  },
  {
    path: 'footer',
    name: 'Footer',
    component: loadcomponents.load('Footer', 'views', '/doc'),
  },
  {
    path: 'iscroll',
    name: 'Iscroll',
    component: loadcomponents.load('Iscroll', 'views', '/doc'),
  },
];
