module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/validateAccount',
     handler: 'validate.validateAccount',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'POST',
      path: '/token/decrypt',
      handler: 'validate.tokenDecrypt',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
