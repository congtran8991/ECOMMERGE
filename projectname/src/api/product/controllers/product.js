"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async findMany(ctx) {
    const requestParams = ctx.request.query;
    const { categories: categoriesID } = requestParams;
    const arrFieldPopulate = ["promotions", "categories"];
    const entries = await strapi.db.query("api::product.product").findMany({
      populate: arrFieldPopulate,
      where: {
        categories: { id: categoriesID },
      },
    });
    return entries;
  },
  async findOne(ctx) {
    const { id } = ctx.params;
    const arrFieldPopulate = ["promotions", "categories"];
    const entries = await strapi.db.query("api::product.product").findOne({
      where: {
        id,
      },
      populate: arrFieldPopulate,
    });
    return entries;
  },
}));
