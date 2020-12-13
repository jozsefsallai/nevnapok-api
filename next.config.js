const path = require('path');
const mdx = require('@next/mdx')({
  extension: /\.mdx?$/
});

const corsHeaders = [
  { key: "Access-Control-Allow-Origin", value: "*" },
  { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS" },
];

module.exports = mdx({
  pageExtensions: [ 'js', 'ts', 'jsx', 'tsx', 'md', 'mdx' ],

  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles')
    ]
  },

  async rewrites() {
    return [
      {
        source: '/ma',
        destination: '/api/today'
      },
      {
        source: '/nev/:name',
        destination: '/api/name/:name'
      },
      {
        source: '/nap/:date',
        destination: '/api/day/:date'
      }
    ];
  },

  async headers() {
    return [
      {
        source: '/ma',
        headers: corsHeaders
      },
      {
        source: '/nev/:name',
        headers: corsHeaders
      },
      {
        source: '/nap/:date',
        headers: corsHeaders
      }
    ];
  }
});
