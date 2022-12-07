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
  ],
};
