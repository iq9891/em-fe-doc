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
];
