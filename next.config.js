module.exports = {
  async headers() {
    return [
      {
        // Set CORS headers
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Allow any origin
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, PATCH, DELETE, OPTIONS', // Allow any HTTP method
          },
        ],
      },
    ];
  },
};