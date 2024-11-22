const path = require('path');

module.exports = {
  webpack: {
    resolve: {
      fallback: {
        buffer: require.resolve('buffer/'),
        querystring: require.resolve('querystring-es3'),
        stream: require.resolve('stream-browserify'),
        url: require.resolve('url/'),
        util: require.resolve('util/'),
      },
    },
  },
};
