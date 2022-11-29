'use strict';

/**
 * category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category', () => ({
    async findByCategory(ctx, next){
        ctx.send({msg: "hdvhbdhvdbvbhdd"})
    },
    async findByCategory1(ctx, next){
        const { data, meta } = await super.find(ctx);
        return { data, meta };
    },
}));
