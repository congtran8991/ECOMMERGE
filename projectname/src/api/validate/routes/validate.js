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
      path: '/token/verify',
      handler: 'validate.tokenVerify',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
