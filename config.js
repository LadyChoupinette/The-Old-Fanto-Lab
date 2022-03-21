module.exports = {
  node: {
    Buffer: true,
    process: true,
  },
  mode: 'development',
  siteTitle: 'The Old Fanto Lab', // <title>
  manifestName: 'TheOldFantoLab',
  manifestShortName: 'Old Lab', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#000000',
  manifestThemeColor: '#000000',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.svg',
  heading: 'The Old Fanto-Lab',
  subHeading: 'Lost, on a barren planet...',
  // social
  socialLinks: [
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/TheOldFantoLab',
    },
  ],
};
