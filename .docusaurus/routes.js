import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'b29'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '0f3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '671'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'fe9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '2cc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'bb9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'bab'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'a2d'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '8d0'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'b5c'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'd73'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '9fb'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'cc1'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'eb5'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'f9c'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'b57'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '343'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'ffb'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '1ba'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '448'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '126'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '844'),
            routes: [
              {
                path: '/docs/category/applications',
                component: ComponentCreator('/docs/category/applications', 'c9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/assignments',
                component: ComponentCreator('/docs/category/assignments', '934'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/authentication',
                component: ComponentCreator('/docs/category/authentication', '5bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/command-reference',
                component: ComponentCreator('/docs/category/command-reference', 'f02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/command-reference/apps/applications-list',
                component: ComponentCreator('/docs/command-reference/apps/applications-list', '133'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/command-reference/apps/dependencies/',
                component: ComponentCreator('/docs/command-reference/apps/dependencies/', 'ae5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/command-reference/arguments',
                component: ComponentCreator('/docs/command-reference/arguments', '181'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/command-reference/assignments/',
                component: ComponentCreator('/docs/command-reference/assignments/', 'e49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/command-reference/assignments/groups',
                component: ComponentCreator('/docs/command-reference/assignments/groups', '7e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/command-reference/authentication/assignments',
                component: ComponentCreator('/docs/command-reference/authentication/assignments', '610'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started',
                component: ComponentCreator('/docs/getting-started', 'fad'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '1c6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
