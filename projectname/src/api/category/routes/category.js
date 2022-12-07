// "use strict";

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
        path: '/categories', // Only match when the URL parameter is composed of lowercase letters
        handler: 'category.findByCategory',
      },
      {
        method: 'GET',
        path: '/categories1', // Only match when the URL parameter is composed of lowercase letters
        handler: 'category.findByCategory1',
      }
    ]
  }
