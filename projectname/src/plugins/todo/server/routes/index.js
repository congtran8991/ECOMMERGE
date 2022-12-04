module.exports = [
  {
    method: 'GET',
    path: '/abc',
    handler: 'myController.index',
    config: {
      policies: [],
      auth: false,
    },
  },
];
