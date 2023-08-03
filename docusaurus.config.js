// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Curve Book',
  tagline: 'curve is cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.opencurve.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'opencurve', // Usually your GitHub org/user name.
  projectName: 'curve-book', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Curve Book',
        logo: {
          alt: 'curve logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/opencurve/curve',
            label: 'GitHub',
            position: 'right',
          },
        ],
        },
      footer: {
        style: 'dark',
        links: [
          {
            title: '常用链接',
            items: [
              {
                label: '官网',
                href: 'https://www.opencurve.io/',
              },
              {
                label: '论坛',
                href: 'https://ask.opencurve.io/',
              },
            ],
          },
          {
            title: '联系我们',
            items: [
              {
                 label: '微信',
                 href: 'https://www.opencurve.io/WeChat',
              },
              {
                label: 'Slack',
                href: 'https://cloud-native.slack.com/archives/C03LFPT6BJM',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Curve Team. Documentation Distributed under CC-BY-4.0. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["en", "zh"],
        docsRouteBasePath: '/',
        indexBlog: false,
      }),
    ],
  ],

};

module.exports = config;
