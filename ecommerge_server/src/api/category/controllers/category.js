'use strict';

/**
 * category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category', ({strapi}) => ({
    async findMany(){
        const arrFieldPopulate = ["parenId", "products"]
        const entries = await strapi.db.query('api::category.category').findMany({
            populate: arrFieldPopulate,
            where: { description: null }
        });
        return entries
    },
    async findOne(ctx, next){
        const { id } = ctx.params
        const arrFieldPopulate = ["parenId", "products"]
        const entries = await strapi.db.query('api::category.category').findOne({
            where: { 
                id 
            },
            populate: arrFieldPopulate
        });
        return entries
    },
}));
