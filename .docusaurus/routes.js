import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/intuneCli/__docusaurus/debug',
    component: ComponentCreator('/intuneCli/__docusaurus/debug', '917'),
    exact: true
  },
  {
    path: '/intuneCli/__docusaurus/debug/config',
    component: ComponentCreator('/intuneCli/__docusaurus/debug/config', '2cf'),
    exact: true
  },
  {
    path: '/intuneCli/__docusaurus/debug/content',
    component: ComponentCreator('/intuneCli/__docusaurus/debug/content', '756'),
    exact: true
  },
  {
    path: '/intuneCli/__docusaurus/debug/globalData',
    component: ComponentCreator('/intuneCli/__docusaurus/debug/globalData', '881'),
    exact: true
  },
  {
    path: '/intuneCli/__docusaurus/debug/metadata',
    component: ComponentCreator('/intuneCli/__docusaurus/debug/metadata', '02d'),
    exact: true
  },
  {
    path: '/intuneCli/__docusaurus/debug/registry',
    component: ComponentCreator('/intuneCli/__docusaurus/debug/registry', '17a'),
    exact: true
  },
  {
    path: '/intuneCli/__docusaurus/debug/routes',
    component: ComponentCreator('/intuneCli/__docusaurus/debug/routes', 'db3'),
    exact: true
  },
  {
    path: '/intuneCli/blog',
    component: ComponentCreator('/intuneCli/blog', '277'),
    exact: true
  },
  {
    path: '/intuneCli/blog/archive',
    component: ComponentCreator('/intuneCli/blog/archive', 'aec'),
    exact: true
  },
  {
    path: '/intuneCli/blog/first-blog-post',
    component: ComponentCreator('/intuneCli/blog/first-blog-post', '67d'),
    exact: true
  },
  {
    path: '/intuneCli/blog/long-blog-post',
    component: ComponentCreator('/intuneCli/blog/long-blog-post', 'b2c'),
    exact: true
  },
  {
    path: '/intuneCli/blog/mdx-blog-post',
    component: ComponentCreator('/intuneCli/blog/mdx-blog-post', '5d7'),
    exact: true
  },
  {
    path: '/intuneCli/blog/tags',
    component: ComponentCreator('/intuneCli/blog/tags', '1d0'),
    exact: true
  },
  {
    path: '/intuneCli/blog/tags/docusaurus',
    component: ComponentCreator('/intuneCli/blog/tags/docusaurus', 'ff6'),
    exact: true
  },
  {
    path: '/intuneCli/blog/tags/facebook',
    component: ComponentCreator('/intuneCli/blog/tags/facebook', '91c'),
    exact: true
  },
  {
    path: '/intuneCli/blog/tags/hello',
    component: ComponentCreator('/intuneCli/blog/tags/hello', 'f22'),
    exact: true
  },
  {
    path: '/intuneCli/blog/tags/hola',
    component: ComponentCreator('/intuneCli/blog/tags/hola', '7fc'),
    exact: true
  },
  {
    path: '/intuneCli/blog/welcome',
    component: ComponentCreator('/intuneCli/blog/welcome', 'c91'),
    exact: true
  },
  {
    path: '/intuneCli/markdown-page',
    component: ComponentCreator('/intuneCli/markdown-page', '56c'),
    exact: true
  },
  {
    path: '/intuneCli/docs',
    component: ComponentCreator('/intuneCli/docs', '347'),
    routes: [
      {
        path: '/intuneCli/docs',
        component: ComponentCreator('/intuneCli/docs', 'cc6'),
        routes: [
          {
            path: '/intuneCli/docs',
            component: ComponentCreator('/intuneCli/docs', '47e'),
            routes: [
              {
                path: '/intuneCli/docs/category/tutorial---basics',
                component: ComponentCreator('/intuneCli/docs/category/tutorial---basics', 'fd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intuneCli/docs/category/tutorial---extras',
                component: ComponentCreator('/intuneCli/docs/category/tutorial---extras', '607'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intuneCli/docs/intro',
                component: ComponentCreator('/intuneCli/docs/intro', 'a07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intuneCli/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/intuneCli/docs/tutorial-basics/congratulations', '74d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intuneCli/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/intuneCli/docs/tutorial-basics/create-a-blog-post', '23a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intuneCli/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/intuneCli/docs/tutorial-basics/create-a-document', '9a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intuneCli/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/intuneCli/docs/tutorial-basics/create-a-page', '76c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intuneCli/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/intuneCli/docs/tutorial-basics/deploy-your-site', '751'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intuneCli/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/intuneCli/docs/tutorial-basics/markdown-features', 'ce3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intuneCli/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/intuneCli/docs/tutorial-extras/manage-docs-versions', '909'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intuneCli/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/intuneCli/docs/tutorial-extras/translate-your-site', '3fe'),
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
    path: '/intuneCli/',
    component: ComponentCreator('/intuneCli/', '260'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
