"use strict";

// /**
//  * category router
//  */

// const { createCoreRouter } = require("@strapi/strapi").factories;

// module.exports = createCoreRouter("api::category.category", {
//   prefix: "/test",
//   config: {
//     find: {
//         auth: false,
//         policies: [],
//         middlewares: [],
//       }
//   },
// });
module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/categories',
        handler: 'category.findMany',
        config: {
            policies: [],
            middlewares: [],
            auth: false
          },
      },
      {
        method: 'GET',
        path: '/categories/:id',
        handler: 'category.findOne',
        config: {
            policies: [],
            middlewares: [],
            auth: false
          },
      }
    ]
  }
