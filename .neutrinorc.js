const path = require('path');

// Plugins
const react = require('@neutrinojs/react');
const htmlTemplate = require('@neutrinojs/html-template');
const copy = require('@neutrinojs/copy');

module.exports = {
  use: [
    copy({
      patterns: [{
        from: './src/public',
        to: './public'
      }]
    }),
    react({
      publicPath: process.env.NODE_ENV !== 'development' ?
        './' :
        '/',
    }),
    htmlTemplate({
      appMountId: 'root',
      lang: 'en',
      meta: {
        viewport: 'width=device-width, initial-scale=1',
      },
      title: 'Thieves Guild',
      template: require.resolve('@neutrinojs/html-template/template.ejs'),
      links: [
        'https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap',
        'https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap'
      ]
    }),
    neutrino => neutrino.config
      .node
        .set('Buffer', true)
  ],
};
