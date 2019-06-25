'use strict';

module.exports = {
  url: 'https://pyotr-chan.netlify.com',
  title: 'ピョートル・ユートル',
  subtitle: '九州生まれ東京潜りのエンジニア志望。CMS初心のなかの初心者です。',
  copyright: '© Pyotr_chan All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-73379983-2',
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Noto Sans JP`,
            variants: [`100`, `300`],
            subsets: [`japanese`]
          },
          {
            family: `Lato`,
            variants: [`300`]
          },
        ],
      },
    }
  ],
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'ピョートルちゃん',
    photo: '/photo.jpg',
    bio: '九州生まれ東京潜り。CMS初心のなかの初心者です。',
    contacts: {
      email: '#',
      telegram: '#',
      twitter: '#',
      github: '#',
      rss: '#',
      vkontakte: '#'
    }
  }
};
