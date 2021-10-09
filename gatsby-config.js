module.exports = {
  siteMetadata: {
    title: 'Octorun',
    titleTemplate: '%s',
    description: 'Live Online Kids Coding classes for age 6-14 years',
    siteUrl: 'https://www.octorun.com',
    url: 'https://www.octorun.com',
    image: '/octorunLogo.jpg',
    owner: 'Octorun',
    twitterUsername: '@octorun',
    facebookAppID: 'octorun',
    nav: [
      // { path: 'https://medium.com/@marisamorby', name: 'Blog', hidden: true },
      { path: '/terms-and-conditions', name: 'Terms And Conditions' },
      { path: '/fulfilment-refund-policy', name: 'Fulfillment Policy' },
      { path: '/privacy-policy', name: 'Privacy Policy' },
      { path: '/contactUs', name: 'Contact Us' },
    ],
    // categories: [
    //   { slug: 'confidence', name: 'Confidence' },
    // ],
  },
  plugins: [
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-N65MFBK',
        enableWebVitalsTracking: true,
      },
    },
  ],
};
