'use strict';

// module.exports = ({ strapi }) => ({
//   async index(ctx) {
//     ctx.body = strapi
//       .plugin('todo')
//       .service('myService')
//       .getWelcomeMessage();
//       // ctx.body = { message: 'HelloWorld' };
//       const entries = await strapi.db.query('api::category.category').findMany({populate: true})
//         return entries
//   },
// });
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category', ({strapi}) => ({
    // async findByCategory(ctx, next){
    //     const entries = await strapi.db.query('api::category.category').findOne({populate: { category: true },})
    //     console.log("entries", entries)
        
    // },
    async index(ctx, next){
        const data = await super.find(ctx);
        const entries = await strapi.db.query('api::category.category').findMany({populate: true})
        return entries
    },
}));
